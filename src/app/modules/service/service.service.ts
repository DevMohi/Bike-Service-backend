import prisma from "../../../shared/prisma";
import { IServiceRecord } from "./service.interface";

const createServiceIntoDB = async (data: IServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: {
      bikeId: data.bikeId,
      serviceDate: data.serviceDate,
      description: data.description,
      status: data.status,
    },
  });
  return result;
};

const getAllServicesFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const markServiceCompleteIntoDB = async (
  serviceId: string,
  completionDate: string
) => {
  const completionDateToUse = completionDate
    ? new Date(completionDate)
    : new Date();
  const result = await prisma.serviceRecord.update({
    where: { serviceId },
    data: {
      completionDate: completionDateToUse,
      status: "done",
    },
  });
  return result;
};

//Pending or in-progress and more than seven days old
const overDueServicesFromDB = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ["pending", "in-progress"],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
  return result;
};

export const serviceRecordService = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  markServiceCompleteIntoDB,
  overDueServicesFromDB,
};
