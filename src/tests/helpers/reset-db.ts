import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient()

export default async function ResetDB(){
    await prisma.$transaction([
        prisma.sum.deleteMany()
    ])
}