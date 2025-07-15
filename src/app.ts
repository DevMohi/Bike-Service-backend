import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike server running...",
  });
});

app.use(cors());

export default app;
