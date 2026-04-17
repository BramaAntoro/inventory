import z from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const registerSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(5),
});
