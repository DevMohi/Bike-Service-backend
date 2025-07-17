import express from "express";
import { customerController } from "./customer.controller";
const router = express();

router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);
router.get("/:customerId", customerController.getSingleCustomer);

export const customerRouter = router;
