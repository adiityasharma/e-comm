import React from 'react'

import showImg from "../../asset/images/shoe.png";


const SaleProductCard = () => {
  return (
    <div className="w-full md:w-full flex flex-col gap-3 md:gap-5 border-2 p-4 md:p-6 rounded-xl border-[#eaefff] ">
      <div className="w-40 h-40 md:w-full md:h-60 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={showImg}
          alt="product img"
        />
      </div>
      <div className="w-full flex flex-col gap-2 md:gap-4">
        <h1 className="text-[#223263] font-[700] text-xl md:text-3xl ">
          FS - Nike Air Max 270 React...
        </h1>
        <h2 className="text-md md:text-2xl text-[#40BFFF] font-[700]">
          $299.45
        </h2>
        <div className="flex items-center gap-5">
          <p className="line-through text-[#9098B1] font-[400] text-md md:text-xl">
            $534.33
          </p>
          <p className="text-[#FB7181] font-[700] text-md md:text-xl">
            24% Off
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;