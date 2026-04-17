import type { NextFunction, Request, Response } from "express";
import type { TypeAPIResponse } from "../../../types/api.type.js";
import type { TypeRegisterRequest, TypeUserResponse } from "../auth.type.js";
import registerService from "../service/register.service.js";

export default async function registerController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data: TypeRegisterRequest = req.body;
    const result: TypeUserResponse = await registerService(data);
    const response: TypeAPIResponse<TypeUserResponse> = {
      success: true,
      message: "Register berhasil",
      status_code: 201,
      data: result,
    };

    return res.status(201).json(response);
  } catch (e) {
    next(e);
  }
}
