const createError = require("http-errors");
const express = require("express");
const Connection = require("./config/db");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

const menuRoutes = require("./routes/menuRoutes");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", menuRoutes);
app.use("/users", usersRouter);

// connect database
Connection();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Start the HTTP server
app.listen(process.env.HTTP_PORT, process.env.HOST, () => {
  console.log(
    `HTTP server is running on http://${process.env.HOST}:${process.env.HTTP_PORT}`
  );
});

module.exports = app;
