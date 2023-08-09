var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var wordsRouter = require("./routes/words");
// var signleWordRouter = require("./routes/single_word");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/words", wordsRouter);
// app.use("/:word", usersRouter);// after a : is a varible aka anything
app.use(cors());

module.exports = app;
