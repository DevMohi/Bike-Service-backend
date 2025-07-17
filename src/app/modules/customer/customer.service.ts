import { PrismaClient } from "../../../generated/prisma";
import { ICustomer } from "./customer.interface";

const prisma = new PrismaClient();

const createCustomerIntoDB = async (data: ICustomer) => {
  console.log("Working");
  const result = await prisma.customer.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
    },
  });

  return result;
};

const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  return result;
};

export const customerService = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getSingleCustomerFromDB,
};
