import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { config } from "./config";
import { indexRoute } from "./types";

const app: Application = express();

// cors
app.use(
  cors({
    origin: config.apiUrl, // Allow requests from any origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Welcome to the LabLog API!",
  });
});

// Importing routes
app.use("/api", indexRoute);

export default app;
