import { NextFunction, Request, RequestHandler, Response } from "express";
import { customerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

//basic boilerplate
const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await customerService.createCustomerIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getAllCustomersFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "Something went wrong",
      error: err,
    });
  }
};

const getSingleCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;
  try {
    const result = await customerService.getSingleCustomerFromDB(customerId);
    res.status(200).json({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const customerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
};
