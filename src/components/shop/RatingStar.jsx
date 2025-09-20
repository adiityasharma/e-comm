import React, { useState } from "react";

const RatingStar = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="flex gap-1 text-2xl ">
      {[...new Array(starCount)].map((_, index) => (
        <span
          onClick={() => setStarValue(index + 1)}
          key={index}
          onMouseEnter={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(0)}
          className={`transition-all duration-400 ease-in-out cursor-default ${
            (hoverValue === 0 && index < starValue) || index < hoverValue
              ? "text-yellow-300"
              : ""
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingStar;
