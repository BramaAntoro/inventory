import prisma from "../../../lib/prisma.js";

export default async function getProductService(user_id: any){
    return prisma.tb_product.findMany({
        where: {
            user_id: user_id
        }
    })
}