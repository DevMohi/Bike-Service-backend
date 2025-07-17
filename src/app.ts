import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRouter } from "./app/modules/customer/customer.routes";

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

export default app;
