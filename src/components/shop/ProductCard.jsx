import React from "react";

import shoeImg from "../../asset/images/shoe3.png";
import RatingStar from "./RatingStar";

export const findDiscountedPrice = (originalPrice, discountPercent) => {
  const price = (originalPrice * (1 - discountPercent / 100)).toFixed(2);
  return price;
};

const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded overflow-hidden border-2 border-[#f4f4f4]">
      <div className="w-full h-40 md:h-60 xl:h-75 overflow-hidden">
        <img
          className="w-full h-full object-cover bg-neutral-100"
          src={product?.thumbnail}
          alt="shoe image"
        />
      </div>
      <div className="w-full px-4 py-5 flex flex-col justify-center md:items-center md:gap-2">
        <h1 className="font-[700] text-[18px] xl:text-[20px] truncate w-full md:text-center">
          {product?.title}
        </h1>
        <div>
          <RatingStar ratingValue={product?.rating} />
        </div>
        <div className="flex flex-col  md:flex-row w-full md:items-center md:justify-center md:gap-3">
          <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#40BFFF]">
            ${findDiscountedPrice(product?.price, product?.discountPercentage)}
          </h1>
          <div className="flex gap-2">
            <h1 className="line-through text-[14px] xl:text-[16px] font-[500] text-[#9098B1] ">
              ${product?.price}
            </h1>
            <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#FB7181]">
              {product?.discountPercentage}% Off
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
