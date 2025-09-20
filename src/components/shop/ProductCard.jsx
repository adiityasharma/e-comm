import React from "react";

import shoeImg from "../../asset/images/shoe3.png";
import RatingStar from "./RatingStar";

export const findDiscountedPrice = (originalPrice, discountPercent) => {
  const price = (originalPrice * (1 - discountPercent / 100)).toFixed(2);
  return price;
};

const ProductCard = ({ product, layout }) => {
  return (
    <div
      className={`w-full rounded flex ${
        layout === "Grid" ? "flex-col" : "flex-row lg:gap-2 xl:gap-5"
      } overflow-hidden border-2 border-[#f4f4f4]`}
    >
      <div
        className={`${
          layout === "Grid"
            ? "w-full h-40 md:h-60 xl:h-75 "
            : "md:w-90 bg-amber-200 lg:w-110 xl:w-120 h-full"
        } overflow-hidden`}
      >
        <img
          className="w-full h-full object-cover bg-neutral-100"
          src={product?.thumbnail}
          alt="shoe image"
        />
      </div>
      <div
        className={` ${
          layout === "Grid"
            ? "flex flex-col md:items-center md:gap-2 justify-center"
            : "flex flex-col gap-1 xl:gap-2"
        } w-full px-4 py-5 `}
      >
        <h1
          className={` ${
            layout === "Grid"
              ? "md:text-center text-[18px] xl:text-[20px] truncate w-full"
              : "text-2xl"
          } font-[700] `}
        >
          {product?.title}
        </h1>
        <div className="flex items-center gap-2">
          <RatingStar ratingValue={product?.rating} /> ({product?.rating}/5)
        </div>
        <div
          className={` ${
            layout === "Grid"
              ? "flex flex-col md:flex-row w-full md:items-center md:justify-center md:gap-3"
              : "flex flex-col gap-1"
          } `}
        >
          <h1
            className={` ${
              layout === "Grid" ? "text-[16px] xl:text-[18px]" : "text-2xl"
            } font-[700] text-[#40BFFF]`}
          >
            ${findDiscountedPrice(product?.price, product?.discountPercentage)}
          </h1>
          <div
            className={`${
              layout === "Grid" ? "flex gap-2" : "flex flex-col gap-1"
            } `}
          >
            <h1 className="line-through text-[14px] xl:text-[16px] font-[500] text-[#9098B1] ">
              ${product?.price}
            </h1>
            <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#FB7181]">
              {product?.discountPercentage}% Off
            </h1>
          </div>
        </div>
        <div
          className={`${
            layout === "Grid"
              ? "hidden"
              : "hidden lg:block lg:text-[15px] xl:text-[17px]"
          }`}
        >
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
