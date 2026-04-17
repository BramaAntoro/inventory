import { Router } from "express";
import loginContoller from "./controllers/login.controller.js";
import validate from "../../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
import registerController from "./controllers/register.controller.js";

const authRoutes = Router()


authRoutes.post("/login", validate(loginSchema), loginContoller)
authRoutes.post("/register", validate(registerSchema), registerController)


export default authRoutes