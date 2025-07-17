import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bikeService } from "./bike.service";
import httpStatus from "http-status";

const createBike = catchAsync(async (req, res) => {
  const result = await bikeService.createBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeService.getAllBikesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Bikes fetched successfully",
    data: result,
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeService.getSingleBikeFromDB(bikeId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully with ID",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
};
