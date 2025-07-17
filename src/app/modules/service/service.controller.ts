import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { serviceRecordService } from "./service.service";
import httpStatus from "http-status";

const createService = catchAsync(async (req, res) => {
  const result = await serviceRecordService.createServiceIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await serviceRecordService.getAllServicesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service Records Fetched Successfully",
    data: result,
  });
});

const getSingleService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await serviceRecordService.getSingleServiceFromDB(serviceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Service Fetched Successfully With ID",
    data: result,
  });
});

const markServiceCompleted = catchAsync(async (req, res) => {
  const completionDate = req.body?.completionDate;
  const { serviceId } = req.params;
  const result = await serviceRecordService.markServiceCompleteIntoDB(
    serviceId,
    completionDate
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service Updated Successfully",
    data: result,
  });
});

const overDueServices = catchAsync(async (req, res) => {
  const result = await serviceRecordService.overDueServicesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const serviceController = {
  createService,
  getAllServices,
  getSingleService,
  markServiceCompleted,
  overDueServices,
};
