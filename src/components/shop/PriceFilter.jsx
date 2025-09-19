import React, { useState } from "react";

const PriceFilter = () => {
  const [rangeVal, setRangeVal] = useState(100);

  const rangerValueHandler = (e) => {
    setRangeVal(e.target.value);
  };

  return (
    <div className="w-full bg-[#F6F7F8] py-5 px-6 rounded-md">
      <h1 className="text-[20px] font-[500] ">Prices</h1>
      <div>
        <div className="flex items-center justify-between mt-5">
          <h1>Ranger:</h1>
          <h1>
            <span>${rangeVal}</span>
          </h1>
        </div>
        <div className="w-full mt-3">
          <input
            onChange={rangerValueHandler}
            type="range"
            value={rangeVal}
            min={1}
            max={999}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
