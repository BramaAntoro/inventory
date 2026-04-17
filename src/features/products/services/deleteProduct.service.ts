import prisma from "../../../lib/prisma.js";

export default async function(id: string){
    return await prisma.tb_product.delete({
        where: {
            id: id
        }
    })
}