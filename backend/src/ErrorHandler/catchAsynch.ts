import { NextFunction, Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";
import appError from "./appError";

export const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.resolve(fn(req, res, next)).catch((err) => next(new appError(err.message,400)));
  };
};
