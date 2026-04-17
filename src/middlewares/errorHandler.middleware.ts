import type { NextFunction, Request, Response } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(err.statusCode || 500).json({
    success: false,
    status_code: err.statusCode || 500,
    message: err.message ?? "Internal Server Error",
    detail: err.detail || "",
  });
}
