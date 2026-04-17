import {
  response,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import deleteProductService from "../services/deleteProduct.service.js";

export default async function deleteProductController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const productId: any = req.params.id
    const result = await deleteProductService(productId);
    return res.status(200).json(result)
  } catch (e) {
    next(e);
  }
}
