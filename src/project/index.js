var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let pathname = q.pathname == '/' ? 'index.html' : (q.pathname == '/about.html' ? 'about.html' : (q.pathname == '/contact-me.html' ? 'contact-me.html' : '404.html'));
    let filename = (__dirname) + "/" + pathname;
    // console.log(filename);
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead({'Content-Type': 'text/html'});
            return res.end(err.message);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);