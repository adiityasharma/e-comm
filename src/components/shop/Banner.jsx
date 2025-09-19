import React from "react";

import shoeImg from "../../asset/images/blueshoe.png";

const Banner = () => {
  return (
    <div className="w-full h-90 grid grid-cols-2 bg-[#40BFFF] rounded-lg text-white">
      <div className="w-full h-full flex justify-center items-center ">
        <div className=" flex flex-col gap-2">
          <h1 className="text-3xl font-[500] ">Adidas Men Running</h1>
          <h1 className="text-3xl font-[500] ">Sneakers</h1>
          <p className="-mt-3 ">
            Performance and design. Taken right to the edge.
          </p>
          <button className="mt-5 w-fit underline decoration-2 underline-offset-4 cursor-pointer font-[600]">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full ">
        <img className="mt-15 w-90 scale-x-[-1]" src={shoeImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
