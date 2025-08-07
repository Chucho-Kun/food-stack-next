import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({ page , totalPages } : ProductsPaginationProps) {

    const isArrowRightDisabled = page < totalPages
    const isArrowLeftDisabled = page > 1
    console.log(page , totalPages);
    console.log(isArrowRightDisabled);
    

  return (
    <nav
        className='flex justify-center py-10 gap-2'
    >
            <Link
                className={`bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${ !isArrowLeftDisabled && 'opacity-50 pointer-events-none' }`}
                href={`/admin/products?page=${page - 1 }`}
            >◀</Link>
              
            <Link
                className={`bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${ !isArrowRightDisabled && 'opacity-50 pointer-events-none'}`}
                href={`/admin/products?page=${page + 1}`}
            >▶</Link>
    </nav>
  )
}
