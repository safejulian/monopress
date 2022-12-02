var log4js = require("log4js");
var express = require("express");

log4js.configure({
  appenders: {
    console: { type: "console", layout: { type: "basic" } },
  },
  categories: {
    default: { appenders: ["console"], level: "info" },
  },
});

var logger = log4js.getLogger("console");
var app = express();
app.use(log4js.connectLogger(logger, { level: "info" }));
app.get("/", function (req, res) {
  res.send("no ansi color here");
});
app.listen(5150);
