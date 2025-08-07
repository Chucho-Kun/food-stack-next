import { z } from "zod"

export const OrderSchema = z.object({
    name: z.string()
        .min(1,'El nombre es obligatorio'),
    total: z.number()
        .min(1, 'Monto total incorrecto'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

export const OrderIdSchema = z.object({
    orderId: z.string()
                .transform( value => parseInt( value ))
                .refine( value => value > 0, {message: 'No se pudo convertir el valor de string a number'} )
})