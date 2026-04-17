import type { NextFunction, Request, Response } from "express";
import getProductService from "../services/getProduct.service.js";
import verifyToken from "../../../lib/verifyToken.js";

export default async function getProductController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user = await verifyToken(token);

    return await getProductService(user.id);
  } catch (e) {
    next(e);
  }
}
