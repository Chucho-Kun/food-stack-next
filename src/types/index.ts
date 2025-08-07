import { Order, Product } from "@/generated/prisma";
import { OrderProducts } from '../../generated/prisma/index';



export type OrderItem = Pick<Product , 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}