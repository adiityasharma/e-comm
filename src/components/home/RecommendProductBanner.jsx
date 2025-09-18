import React from "react";

import shoe2 from "../../asset/images/shoe2.png";

const RecommendProductBanner = () => {
  return (
    <div className="relative p-4 md:p-0 text-white md:mt-10 w-full h-60 md:h-100 lg:h-140">
      <div className="w-full h-full rounded-2xl overflow-hidden">
        <img className="w-full h-full object-cover" src={shoe2} alt="" />
      </div>
      <div className="absolute top-15 left-10 md:top-20 lg:top-30 md:left-20 lg:left-30">
        <div className="text-2xl md:text-5xl lg:text-8xl flex flex-col md:gap-5 font-[700]">
          <h1>Recomended</h1>
          <h1>Product</h1>
        </div>
        <p className=" md:text-2xl mt-5 md:mt-20" >We recommend the best for you</p>
      </div>
    </div>
  );
};

export default RecommendProductBanner;
