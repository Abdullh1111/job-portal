import { NextFunction, Request, Response } from "express";
import appError from "./appError";

const globalErrorHandler = (
  err: appError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "internal server error";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default globalErrorHandler;
