import { Request, Response } from "express";
import { authService } from "./auth.service";

const userRegister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await authService.userRegister(payload);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const userLogin = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await authService.userLogin(payload);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const authController = {
  userRegister,
  userLogin,
};
