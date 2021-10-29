const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>You are in index Page</h1>");
});

app.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>You are in about page</h1>");
});

app.get("/contact", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>You are in contact page</h1>");
});

app.get("*", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>404 not found</h1>");
});

app.listen(5000);
