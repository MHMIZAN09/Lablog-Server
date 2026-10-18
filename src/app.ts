import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Application, type Request, type Response } from "express";
import { config } from "./config";
import { indexRoute } from "./routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";

const app: Application = express();

// cors
app.use(
  cors({
    origin: config.frontendUrl, // Allow requests from any origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Basic route
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Welcome to the LabLog API!",
  });
});

// Importing routes
app.use("/api", indexRoute);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
