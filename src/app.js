const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
	let filename = __dirname + "/project/index.html";
	fs.readFile(filename, function (err, data) {
		if (err) {
			res.send("ERROR: " + err.message);
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

app.get("/about", (req, res) => {
	let filename = __dirname + "/project/about.html";
	fs.readFile(filename, function (err, data) {
		if (err) {
			res.send("ERROR: " + err.message);
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

app.get("/contact-me", (req, res) => {
	let filename = __dirname + "/project/contact-me.html";
	fs.readFile(filename, function (err, data) {
		if (err) {
			res.send("ERROR: " + err.message);
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

app.use("/", (req, res) => {
	let filename = __dirname + "/project/404.html";
	fs.readFile(filename, function (err, data) {
		if (err) {
			res.send("ERROR: " + err.message);
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

app.listen(8080, () => {
	console.log("Server is listening on port 8080");
});
