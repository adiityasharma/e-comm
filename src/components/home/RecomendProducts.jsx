import React from 'react'
import SaleProductCard from './SaleProductCard'

const RecomendProducts = () => {
  return (
    <div className='w-full md:mt-10 p-4 md:p-0 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
      <SaleProductCard/>
      <SaleProductCard/>
      <SaleProductCard/>
      <SaleProductCard/>
    </div>
  )
}

export default RecomendProducts