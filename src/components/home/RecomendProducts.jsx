import React from 'react'
import SaleProductCard from './SaleProductCard'

// w-full md:mt-10 p-4 md:p-0 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5"
const RecomendProducts = ({data}) => {
  return (
    <div className="w-full mt-8 flex flex-nowrap overflow-x-scroll md:overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 px-4 md:px-0">
      {data?.map((productData) => (
        <SaleProductCard key={productData?.id} data={productData} />
      ))}
    </div>
  );
}

export default RecomendProducts