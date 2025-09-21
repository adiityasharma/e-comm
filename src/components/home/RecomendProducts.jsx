import React from 'react'
import SaleProductCard from './SaleProductCard'

const RecomendProducts = ({data}) => {
  return (
    <div className="w-full md:mt-10 p-4 md:p-0 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
      {data?.map((productData) => (
        <SaleProductCard key={productData?.id} data={productData} />
      ))}
    </div>
  );
}

export default RecomendProducts