import React, { useEffect, useState } from "react";

import bannerImage1 from "../../asset/images/bannerImage.jpg";
import bannerImage2 from "../../asset/images/bannerImage2.jpg";
import bannerImage3 from "../../asset/images/bannerImage3.jpg";
import { Link } from "react-router-dom";

const ImageCarousel = ({duration}) => {
  const imageArr = [bannerImage1, bannerImage2, bannerImage3];
  let [index, setIndex] = useState(0);

  const [time, setTime] = useState(duration)

  console.log(object)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex < imageArr.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [imageArr.length]);

  return (
    <div className="relative p-4 md:p-0 w-full md:mt-4 rounded-xl overflow-hidden">
      <div className="relative w-full h-50 sm:h-70 md:h-100 lg:h-140 rounded-xl overflow-hidden ">
        <Link to={"/shop"}>
          <img
            className="w-full h-full object-fill "
            src={imageArr[index]}
            alt="banner image"
          />
        </Link>
        <div className="text-white text-3xl md:text-5xl lg:text-7xl font-extrabold absolute top-5 left-5 md:top-15 md:left-15 ">
          <h1>Super Flash Sale</h1>
          <p className="md:mt-8">50% Off</p>
        </div>

        <div className="absolute bottom-10 left-5 md:bottom-15 md:left-15">
          <div className="flex items-center sm:text-3xl md:text-4xl lg:text-6xl gap-2">
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
        {imageArr.length > 0 &&
          imageArr.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-4 h-4 ${
                index == idx ? "bg-[#40BFFF]" : "bg-[#98ddff]"
              } rounded-full cursor-pointer`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
