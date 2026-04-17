import type { NextFunction, Request, Response } from "express";
import type { TypeLoginRequest, TypeUserResponse } from "../auth.type.js";
import loginService from "../service/login.service.js";
import type { TypeAPIResponse } from "../../../types/api.type.js";

export default async function loginContoller(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data: TypeLoginRequest = req.body;
    const result: TypeUserResponse = await loginService(data);
    const response: TypeAPIResponse<TypeUserResponse> = {
      success: true,
      message: "Register berhasil",
      status_code: 201,
      data: result,
    };

    return res.status(201).json(response)
  } catch (e) {
    next(e);
  }
}
