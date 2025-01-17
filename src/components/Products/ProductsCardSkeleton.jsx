import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"

const ProductsCardSkeleton = () => {
  return (
    <Skeleton className='product-card' width={280} />
  )
}

export default ProductsCardSkeleton