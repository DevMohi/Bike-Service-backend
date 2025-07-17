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

// Partial<ICustomer> allows updating only some fields of the ICustomer object by making all its properties optional
const updateCustomerIntoDB = async (id: string, data: Partial<ICustomer>) => {
  //jodi id na thake send an error
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });
  return result;
};

const deleteCustomerFromDB = async (id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.delete({
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
  updateCustomerIntoDB,
  deleteCustomerFromDB,
};
