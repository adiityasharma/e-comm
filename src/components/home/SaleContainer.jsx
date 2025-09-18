import React from "react";

import SaleProductCard from "./SaleProductCard";

const SaleContainer = ({title="Flash Sale", buttonText="See More"}) => {
  return (
    <div className="w-full mt-5 md:mt-15 p-4 md:p-0">
      <div className="w-full flex items-center justify-between text-xl md:text-5xl font-bold">
        <h1>{title}</h1>
        <h1 className="text-xl md:text-5xl cursor-pointer hover:opacity-80 text-[#40BFFF]">
          {buttonText}
        </h1>
      </div>

      <div className="w-full mt-8 flex flex-nowrap overflow-x-scroll md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
        <SaleProductCard />
        <SaleProductCard />
        <SaleProductCard />
        <SaleProductCard />
        <SaleProductCard />
      </div>
    </div>
  );
};

export default SaleContainer;
