import { NextFunction, Request, RequestHandler, Response } from "express";

//basic boilerplate -> this is a higher order function -> it takes a function and returns a function
export const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
