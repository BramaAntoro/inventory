import { Router } from "express";
import authRoutes from "../features/auth/auth.route.js";

const v1Routes = Router()

v1Routes.use("/auth", authRoutes)

export default v1Routes;