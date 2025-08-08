import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

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
