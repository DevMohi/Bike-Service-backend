import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Error here", err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message || "Something went wrong",
    err: err,
  });
};
