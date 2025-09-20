import React from "react";

import shoeImg from "../../asset/images/shoe3.png";
import RatingStar from "./RatingStar";

const ProductCard = () => {
  return (
    <div className="w-full rounded overflow-hidden border-2 border-[#f4f4f4]">
      <div className="w-full h-40 md:h-60 xl:h-75 overflow-hidden">
        <img
          className="w-full h-full object-cover bg-neutral-100"
          src={shoeImg}
          alt="shoe image"
        />
      </div>
      <div className="w-full px-4 py-5 flex flex-col justify-center md:items-center md:gap-2">
        <h1 className="font-[700] text-[18px] xl:text-[20px]">
          Nike Air Max 270 React
        </h1>
        <div>
          <RatingStar />
        </div>
        <div className="flex flex-col  md:flex-row w-full md:items-center md:justify-center md:gap-3">
          <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#40BFFF]">
            $299.44
          </h1>
          <div className="flex gap-2">
            <h1 className="line-through text-[14px] xl:text-[16px] font-[400] text-[#9098B1] ">
              $546.44
            </h1>
            <h1 className="font-[700] text-[16px] xl:text-[18px] text-[#FB7181]">
              24% Off
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
