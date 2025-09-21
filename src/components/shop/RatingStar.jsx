import React, { useState } from "react";

const RatingStar = ({ starCount = 5, ratingValue }) => {
  const [starValue, setStarValue] = useState(Math.floor(ratingValue));

  return (
    <div className="flex ms:gap-1 text-[15px] md:text-2xl ">
      {[...new Array(starCount)].map((_, index) => (
        <span
          key={index}
          className={`transition-all duration-400 ease-in-out cursor-default ${
            index < starValue ? "text-yellow-300" : ""
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingStar;
