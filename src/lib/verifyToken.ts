import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export default async function (token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded
  } catch (error) {
    throw error;
  }
}
