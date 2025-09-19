import React from "react";

const dealsItems = [
  "Nike",
  "Airmax",
  "Nike",
  "Adidas",
  "Vans",
  "All Stars",
  "Adidas",
];

const HotDeals = () => {
  return (
    <div className="w-full bg-[#F6F7F8] py-5 px-6 rounded-md">
      <h1 className="text-[20px] font-[500] ">Hot Deals</h1>

      <div className="mt-7">
        <ul className="flex flex-col gap-5">
          {dealsItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-[18px] text-[#262626]"
            >
              <li className="">{item}</li>
              <span
                className="opacity-35 "
              >
                99
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotDeals;
