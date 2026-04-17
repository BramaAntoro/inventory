import type z from "zod";
import type { loginSchema, registerSchema } from "./auth.validation.js";

export type TypeUserResponse = {
  id: string;
  username: string;
  email: string;
  token?: string;
};


export type TypeLoginRequest = z.infer<typeof loginSchema>;
export type TypeRegisterRequest = z.infer<typeof registerSchema>