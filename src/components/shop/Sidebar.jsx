import React, { useState } from "react";
import HotDeals from "./HotDeals";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import AllBrand from "./AllBrand";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className=" w-full h-full flex-col gap-5 mb-5">
      <div
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="cursor-pointer w-full bg-[#F6F7F8] py-3 px-6 rounded-md flex items-center justify-between"
      >
        <h1 className="text-[20px] font-[500] ">Filters</h1>
        <div className=" w-8 h-8 flex items-center justify-center rounded-full">
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isFilterOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isFilterOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex w-full h-auto flex-col gap-2">
          <HotDeals />
          <PriceFilter />
          <ColorFilter />
          <AllBrand />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{/* <div
  onClick={() => setIsFilterOpen(!isFilterOpen)}
  className="w-full bg-[#F6F7F8] py-5 px-6 rounded-md mt-5"
>
  <div className="text-[20px] font-[500] flex justify-center items-center gap-2">
    <h1>Filter</h1>
    {isFilterOpen ? <ChevronUp /> : <ChevronDown />}
  </div>
</div> */}