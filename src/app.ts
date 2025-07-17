import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { customerRouter } from "./app/modules/customer/customer.routes";
import httpStatus from "http-status";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Error here", err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message || "Something went wrong",
    err: err,
  });
};

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike server running...",
  });
});

app.use("/api/customers", customerRouter);

//global Error handler must use after this
app.use(globalErrorHandler);

export default app;
