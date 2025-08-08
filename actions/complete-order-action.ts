"use server"

import { prisma } from "@/src/prisma"
import { OrderIdSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"

export async function completeOrder(formData : FormData){
    
    const data = {
        orderId: formData.get('order_id')
    }

    const result = OrderIdSchema.safeParse(data)

    if(result.success){
        try {
            await prisma.order.update({
                where:{
                    id: result.data.orderId
                },
                data:{
                    status: true,
                    orderReadyAt: new Date(Date.now())
                }
            })

            console.log('Acualizacion realizada correctamente...');
            revalidatePath('/admin/orders')
        
        } catch (error) {
            console.log(error);
        }
    }
}