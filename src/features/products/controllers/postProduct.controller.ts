import type { NextFunction, Request, Response } from "express";
import type {
  TypeProductRequest,
  TypeProductResponse,
} from "../product.type.js";
import postProductService from "../services/postProduct.service.js";
import verifyToken from "../../../lib/verifyToken.js";
import { JWT_SECRET } from "../../../config/env.js";

export default async function postProductController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    console.log({ req });
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user = await verifyToken(token)

    const data: TypeProductRequest = {
      ...req.body,
      user_id: user.id,
    };

    console.log({ data });
    const result: TypeProductResponse = await postProductService(data);
    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
}
