import prisma from "../../../lib/prisma.js";
import type {
  TypeProductRequest,
  TypeProductResponse,
} from "../product.type.js";

export default async function postProductService(
  req: TypeProductRequest,
): Promise<TypeProductResponse> {
  console.log({ req });
  const data = await prisma.tb_product.create({
    data: {
      name: req.name,
      sku: req.sku,
      stock: req.stock,
      user_id: req.user_id
    },
  });

  const response: TypeProductResponse = {
    id: data.id,
    name: data.name,
    sku: data.sku,
    stock: data.stock,
  };

  return response;
}
