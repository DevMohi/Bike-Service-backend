import { NextFunction, Request, RequestHandler, Response } from "express";
import { customerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createCustomerIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await customerService.getAllCustomersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.getSingleCustomerFromDB(customerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully with ID",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.updateCustomerIntoDB(
    customerId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Data Updated Successfully",
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.deleteCustomerFromDB(customerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer Data Deleted Successfully",
    data: result,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
