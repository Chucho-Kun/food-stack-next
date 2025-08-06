import { PrismaClient } from '../generated/prisma';
import { categories } from './data/categories';
import { products } from "./data/products";
import colors from "colors"

const prisma = new PrismaClient()

async function main() {
    try {
        await prisma.category.createMany({
            data:categories
        })
        await prisma.product.createMany({
            data:products
        })
    } catch (error) {
        console.log( colors.bgRed.white.bold(`Error desde Prisma: ${error}`));
    }
}

main()
    .then( async () => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.log( colors.bgYellow.bold(e) );
        await prisma.$disconnect()
        process.exit(1)
    })