"use client"
import { Product } from "@/generated/prisma"
import { useStore } from "@/src/store"

type AddProductButtonProps = {
    product:Product
}

export default function AddProductButton({ product }:AddProductButtonProps) {

    //const addToOrder = useStore( state => state.addToOrder ) 
    const { addToOrder } = useStore()

  return (
    <button type="button"
        onClick={() => addToOrder(product)}  
        className="bg-orange-800 hover:bg-orange-900 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
        >Agregar
    </button>
  )
}
