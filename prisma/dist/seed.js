"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { PrismaClient } from '../generated/prisma';
const client_1 = require("@prisma/client");
const categories_1 = require("./data/categories");
const products_1 = require("./data/products");
const colors_1 = __importDefault(require("colors"));
const prisma = new client_1.PrismaClient();
async function main() {
    try {
        await prisma.category.createMany({
            data: categories_1.categories
        });
        await prisma.product.createMany({
            data: products_1.products
        });
        console.log(colors_1.default.bgGreen.white.bold("Seed ejecutado correctamente"));
    }
    catch (error) {
        console.log(colors_1.default.bgRed.white.bold(`Error desde Prisma: ${error}`));
    }
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.log(colors_1.default.bgYellow.bold(e));
    await prisma.$disconnect();
    process.exit(1);
});
