import { Product } from "@/generated/prisma"
import { formatCurrency, getImagePath } from "@/src/utils"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {

  const imagePath = getImagePath(product.image)

  return (
    <div className="bg-white rounded-lg shadow">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold h-[50px]">{product.name}</h3>
        <p className="mt-5 font-black text-2xl text-center text-amber-600">
            { formatCurrency( product.price )}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  )
}
