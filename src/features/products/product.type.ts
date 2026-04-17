import type z from "zod";
import type { createProductSchema } from "./product.validation.js";
import { string } from "zod";

export type TypeProductResponse = {
  id: string;
  name: string;
  sku: string;
  stock: number;
};

export type TypeProductRequest = z.infer<typeof createProductSchema> & {
  user_id: string;
};
