import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

// Consulta categorías en cada request (como el resto de páginas de /admin);
// evita que Next intente pre-renderizarla en build time contra la BD.
export const dynamic = 'force-dynamic';

export default function CreateProductPage() {
  return (
    <>
      <Heading>Agrega un nuevo producto</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  )
}
