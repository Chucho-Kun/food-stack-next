import ProductsSearchForm from '@/components/products/ProductsSearchForm';
import ProductTable from '@/components/products/ProductTable';
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/prisma';
import React from 'react'

const searchProducts = async (searchTerm: string) => {
    const products = await prisma.product.findMany({
        where:{
            name:{
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPAge({searchParams}: {searchParams: Promise< { search : string } > }) {

    const { search } = await searchParams
    const products = await searchProducts(search);
  
    return (
        <>
            <Heading>Resultados de la Búsqueda: {search}</Heading>

            <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                <ProductsSearchForm />
            </div>

            {products.length ? (
                <ProductTable products={products} />
            ) : (
                <p className='text-center text-lg mt-50'>No hay resultados</p>
            )}
        </>
  )
}
