process.loadEnvFile();

import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { categories } from './data/categories';
import { products } from "./data/products";
import colors from "colors"

const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
    try {
        await prisma.category.createMany({
            data:categories
        })
        await prisma.product.createMany({
            data:products
        });
        console.log(colors.bgGreen.white.bold("Seed ejecutado correctamente"));
    } catch (error) {
        console.log( colors.bgRed.white.bold(`Error desde Prisma: ${error}`));
        throw error;
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