import express from "express";
import { serviceController } from "./service.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { serviceValidationSchemas } from "./service.validations";
const router = express();

router.post(
  "/",
  validateRequest(serviceValidationSchemas.create),
  serviceController.createService
);
router.get("/", serviceController.getAllServices);
router.get("/status", serviceController.overDueServices);
router.get("/:serviceId", serviceController.getSingleService);
router.put(
  "/:serviceId/complete",
  validateRequest(serviceValidationSchemas.complete),
  serviceController.markServiceCompleted
);

export const serviceRouter = router;
