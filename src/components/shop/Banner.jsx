import React from "react";

import shoeImg from "../../asset/images/blueshoe.png";

const Banner = () => {
  return (
    <div className="w-full h-60 md:h-60 lg:h-90 grid grid-cols-2 bg-[#40BFFF] rounded text-white">
      <div className="w-full h-full flex justify-center items-center ">
        <div className=" flex flex-col md:gap-1 lg:gap-2 pl-5 lg:pl-0">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-[500] ">Adidas Men Running</h1>
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-[500] ">Sneakers</h1>
          <p className="md:-mt-2 lg:-mt-3 text-[12px] lg:text-sm xl:text-md">
            Performance and design. Taken right to the edge.
          </p>
          <button className="mt-5 w-fit underline decoration-2 underline-offset-4 cursor-pointer font-[600]">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full ">
        <img className="mt-15 md:w-60 lg:w-90 scale-x-[-1]" src={shoeImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
