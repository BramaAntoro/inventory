import { Router } from "express";
import authRoutes from "../features/auth/auth.route.js";
import productRoutes from "../features/products/product.route.js";

const v1Routes = Router()

v1Routes.use("/auth", authRoutes)
v1Routes.use("/product", productRoutes)

export default v1Routes;