import React from "react";

import SaleProductCard from "./SaleProductCard";
import { Link } from "react-router-dom";

const SaleContainer = ({ title = "Flash Sale", buttonText = "See More", data }) => {

  return (
    <div className="w-full mt-5 md:mt-15 p-4 md:p-0">
      <div className="w-full flex items-center justify-between text-xl md:text-5xl font-bold">
        <h1>{title}</h1>
        <Link
          to={"/shop"}
          className="text-xl md:text-5xl cursor-pointer hover:opacity-80 text-[#40BFFF]"
        >
          {buttonText}
        </Link>
      </div>

      <div className="w-full mt-8 flex flex-nowrap overflow-x-scroll md:overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
        {data?.map((productData) => (
          <SaleProductCard key={productData?.id} data={productData} />
        ))}
      </div>
    </div>
  );
};

export default SaleContainer;
