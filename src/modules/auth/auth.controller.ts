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
    const { accessToken, refreshToken } = await authService.userLogin(payload);

    // cookies setup

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: {
        accessToken,
        refreshToken,
      },
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
