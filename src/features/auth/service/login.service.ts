import { email } from "zod";
import prisma from "../../../lib/prisma.js";
import type { TypeLoginRequest, TypeUserResponse } from "../auth.type.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../config/env.js";

export default async function loginService(
  req: TypeLoginRequest,
): Promise<TypeUserResponse> {
  let user = await prisma.tb_users.findUnique({
    where: {
      email: req.email,
    },
  });

  if (!user) {
    const error = new Error("username not found") as any;
    error.statusCode = 401;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(req.password, user.password);

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    JWT_SECRET as string,
    {
      expiresIn: "1d",
    },
  );

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 1);

  await prisma.tb_jwt_token.create({
    data: {
      token: token,
      user_id: user.id,
      expiresAt: expiresAt,
    },
  });

  const response: TypeUserResponse = {
    id: user.id,
    email: user.email,
    username: user.username,
    token: token,
  };

  return response;
}
