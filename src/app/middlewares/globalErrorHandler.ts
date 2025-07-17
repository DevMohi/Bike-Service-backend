import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err?.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err?.message || "Something went wrong",
    stack: process.env.NODE_ENV === "development" ? err?.stack : undefined,
  });
};
