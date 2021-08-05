const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

// config
app.use("/", serveStatic(path.join(__dirname, "/dist")));
// config
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("app running on port" + port);
