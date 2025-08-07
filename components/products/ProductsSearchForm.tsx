"use client"
import { SearchSchema } from "@/src/schemas"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"


export default function ProductsSearchForm() {

    const handleSearchForm = (formData : FormData) => {

        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error( issue.message )
            })
            return
        }        
        redirect(`/admin/products/search?search=${result.data.search}`)
    }

  return (
    <form action={handleSearchForm} className="flex items-center">
        <input 
            type="text" 
            placeholder="Buscar Producto"
            className="p-2 placeholder-gray-400 w-full bg-white rounded-tl rounded-bl"
            name="search"
        />

        <input 
            type="submit"
            className="bg-indigo-600 p-3 uppercase text-white cursor-pointer font-bold rounded-tr rounded-br text-sm hover:bg-indigo-800"
            value={'Buscar'}
         />
    </form>
  )
}
