import express, { urlencoded } from "express";
import cors from "cors";
import globalErrorHandler from "./ErrorHandler/globalErrorHandler";

// midleware
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
export default app;
