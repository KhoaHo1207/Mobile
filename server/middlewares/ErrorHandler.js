const errorHandler = (err, req, res, next) => {
  console.log("Error: ", err.stack || err.message);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    sccess: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
