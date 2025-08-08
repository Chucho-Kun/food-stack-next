import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
        <Heading>Producto no encontrado</Heading>

        <Link
            className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-amber-500"
            href='/admin/products'
        >Ir A Productos</Link>
    </div>
  )
}
