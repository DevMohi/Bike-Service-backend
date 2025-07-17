import express, {
  Application,
  NextFunction,
  Request,
  response,
  Response,
} from "express";
import cors from "cors";
import { customerRouter } from "./app/modules/customer/customer.routes";
import { notFound } from "./shared/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

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

//Not found middleware
app.use(notFound);

export default app;
