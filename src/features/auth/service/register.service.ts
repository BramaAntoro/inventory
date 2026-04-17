import prisma from "../../../lib/prisma.js";
import type { TypeRegisterRequest, TypeUserResponse } from "../auth.type.js";
import bcrypt from "bcrypt";

export default async function registerService(
  request: TypeRegisterRequest,
): Promise<TypeUserResponse> {
  const totalUserWithSameEmail = await prisma.tb_users.count({
    where: {
      email: request.email,
    },
  });

  if (totalUserWithSameEmail != 0) {
    const error = new Error("Email sudah digunakan") as any;
    error.statusCode = 400;
    throw error;
  }

  request.password = await bcrypt.hash(request.password, 10);

  const user = await prisma.tb_users.create({ data: request });

  const response: TypeUserResponse = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  return response;
}
