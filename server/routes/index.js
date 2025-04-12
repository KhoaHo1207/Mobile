const express = require("express");
const authRoute = require("./auth.route");
const errorHandler = require("../middlewares/ErrorHandler");
const initRoute = (app) => {
  app.use("/api/auth", authRoute);

  app.use(errorHandler);
};

module.exports = initRoute;
