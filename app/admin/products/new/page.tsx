import ProductTable from "@/components/products/ProductTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/prisma"

const getProducts = async () => {
  const products = await prisma.product.findMany({
    include:{
      category: true
    }
  })
  return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function createProductPage() {
  
  const products = await getProducts()
  
  return (
    <>
      <Heading>Administrar Productos</Heading>
    
      <ProductTable
        products={products}
      />

    </>
  )
}
