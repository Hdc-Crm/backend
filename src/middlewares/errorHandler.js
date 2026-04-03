// /** @format */

// export const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   res.status(statusCode).json({
//     success: false,
//     message: err.message || "Internal server error",
//   });
// };


const errorHandlerMiddleware = (err, _, res, __) => {
  if (res.headersSent) {
    return;
  }

  const statusCode = err.statusCode ?? res.statusCode ?? 500;

  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: "error",
      message: err.message,
      errors: err.errors,
    });
  }

  return res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandlerMiddleware;
