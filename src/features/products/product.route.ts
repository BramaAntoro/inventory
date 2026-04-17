import { Router } from "express";
import postProductController from "./controllers/postProduct.controller.js";
import validate from "../../middlewares/validate.middleware.js";
import { createProductSchema } from "./product.validation.js";
import getProductController from "./controllers/getProduct.controller.js";
import deleteProductController from "./controllers/deleteProduct.controller.js";


const productRoutes = Router();

productRoutes.post("/", validate(createProductSchema), postProductController);
productRoutes.get("/", getProductController);
productRoutes.delete("/:id", deleteProductController)

export default productRoutes;
