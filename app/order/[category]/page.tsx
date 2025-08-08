import ProductCard from "@/components/products/ProductCard";
import { products } from "@/prisma/data/products";
import { prisma } from "@/src/prisma";
import { categories } from '../../../prisma/data/categories';
import Heading from "@/components/ui/Heading";


async function getProducts(category: string){
  const products = await prisma.product.findMany({
    where:{
      category:{
        slug: category
      }
    }
  })
  return products
}

export default async function OrderPage(props: { params: { category: string } }) {
  const { params } = props;
  const products = await getProducts(params.category);

  return (
    <>
      <Heading>Elije y personaliza tu pedido a continuación:</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
