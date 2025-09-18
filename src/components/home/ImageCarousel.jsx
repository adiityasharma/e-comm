import React from "react";

import bannerImg from "../../asset/images/banner.png";

const ImageCarousel = () => {
  return (
    <div className="relative p-4 md:p-0 w-full md:mt-4 rounded-xl overflow-hidden">
      <div className="relative w-full h-50 md:h-140 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={bannerImg}
          alt="banner image"
        />
        <div className="text-white text-3xl md:text-7xl font-extrabold absolute top-5 left-5 md:top-15 md:left-15 ">
          <h1>Super Flash Sale</h1>
          <p className="md:mt-8">50% Off</p>
        </div>

        <div className="absolute bottom-10 left-5 md:bottom-15 md:left-15">
          <div className="flex items-center md:text-6xl gap-2">
            <div className="font-bold bg-white min-w-fit px-3 py-2 rounded md:px-7 md:py-7 md:rounded-xl">
              24
            </div>
            <span className="text-white font-bold">:</span>
            <div className="font-bold bg-white min-w-fit px-3 py-2 rounded md:px-7 md:py-7 md:rounded-xl">
              24
            </div>
            <span className="text-white font-bold">:</span>
            <div className="font-bold bg-white min-w-fit px-3 py-2 rounded md:px-7 md:py-7 md:rounded-xl">
              24
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 md:h-15 flex items-center justify-center gap-2 mt-2">
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
