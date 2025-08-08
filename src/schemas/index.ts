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

export const SearchSchema = z.object({
    search: z.string()
                .trim()
                .min( 1 , { message : 'La búsqueda no puede ir vacia' })
})

export const ProductSchema = z.object({
    name: z.string()
        .trim()
         .min(1,{ message: 'El nombre del producto no puede ir vacio'}), 
    price: z.string()
        .trim()
        .transform( value => parseFloat( value ))
        .refine( value => value > 0 , { message : 'El precio debe ser mayor a 0'}),
    categoryId: z.string()
        .trim()
        .transform( value => parseInt( value ))
        .refine( value => value > 0 , { message : 'La categoría es obligatoria'}),
    image: z.string()
        .min(1, {message: 'La imagen es obligatoria'})
})