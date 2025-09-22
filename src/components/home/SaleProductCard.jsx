import React from "react";

import { findDiscountedPrice } from "../shop/ProductCard";
import { Link } from "react-router-dom";

const SaleProductCard = ({ data }) => {
  return (
    <div className="w-full md:w-full flex flex-col gap-3 md:gap-5 border-2 p-4 md:p-6 rounded-xl border-[#eaefff] ">
      <div className="relative w-50 h-50 md:w-full md:h-60 overflow-hidden">
        <Link to={`/products/${data?.id}`}>
          <img
            className="w-full h-full object-cover hover:scale-120 transition-all duration-300"
            src={data?.thumbnail}
            alt="product img"
          />
        </Link>
        <div className="absolute z-2 top-0 bg-[#FF4858] text-white text-[12px] lg:text-[20px] px-2 md:px-3 py-1 rounded">
          Hot
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 md:gap-4">
        <h1 className="text-[#223263] font-[700] text-lg md:text-3xl ">
          {data?.title}
        </h1>
        <h2 className="text-md md:text-2xl text-[#40BFFF] font-[700]">
          ${findDiscountedPrice(data?.price, data?.discountPercentage)}
        </h2>
        <div className="flex items-center gap-5">
          <p className="line-through text-[#9098B1] font-[400] text-md md:text-xl">
            ${data?.price}
          </p>
          <p className="text-[#FB7181] font-[700] text-md md:text-xl">
            {data?.discountPercentage}% Off
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;
