import { Router } from "express";
import postProductController from "./controllers/postProduct.controller.js";
import validate from "../../middlewares/validate.middleware.js";
import { createProductSchema } from "./product.validation.js";


const productRoutes = Router();

productRoutes.post("/", validate(createProductSchema), postProductController);

export default productRoutes;
