import express from "express";
import { bikeController } from "./bike.controller";
const router = express();

router.post("/", bikeController.createBike);
router.get("/", bikeController.getAllBikes);
router.get("/:bikeId", bikeController.getSingleBike);

export const bikeRouter = router;
