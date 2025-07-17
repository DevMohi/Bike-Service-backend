import express, { NextFunction } from "express";
import { customerController } from "./customer.controller";
import { customerValidationSchemas } from "./customer.validations";
import { validateRequest } from "../../middlewares/validateRequest";
const router = express();

router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);
router.get("/:customerId", customerController.getSingleCustomer);
router.put(
  "/:customerId",
  validateRequest(customerValidationSchemas.update),
  customerController.updateCustomer
);

export const customerRouter = router;
