import prisma from "../../../shared/prisma";
import { IBike } from "./bike.interface";

const createBikeIntoDB = async (data: IBike) => {
  const result = await prisma.bike.create({
    data: {
      brand: data.brand,
      model: data.model,
      year: data.year,
      customerId: data.customerId,
    },
  });
  return result;
};

const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });

  return result;
};

export const bikeService = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
};
