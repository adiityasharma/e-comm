import React from "react";

import { Grid3x3, Menu } from "lucide-react";

const FilterBar = ({
  items,
  setProductCount,
  setSortBy,
  layout,
  setLayout,
}) => {
  return (
    <div className="w-full h-15 md:h-12 lg:h-15 flex justify-between px-3 md:px-3 lg:px-5 text-[#22262A] items-center rounded bg-[#F1F3F4]">
      <div className="w-full md:w-fit flex items-center justify-between gap-3 md:gap-4 lg:gap-10 ">
        <h1 className="text-[14px] font-[400] md:text-sm lg:text-[16px]">
          {items?.total} Items
        </h1>
        <div className="h-full flex items-center gap-1">
          <h1 className="text-[14px] md:text-sm lg:text-[16px]">Sort By</h1>
          <select
            onClick={(e) => setSortBy(e.target.value)}
            className="w-22 sm:w-fit outline-none text-[14px] md:text-sm lg:text-[16px] "
            name=""
            id=""
          >
            <option value="title-asc">A-Z</option>
            <option value="title-desc">Z-A</option>
            <option value="price-asc">Price: Low To High</option>
            <option value="price-desc">Price: High To Low</option>
            <option value="rating-asc">Rating: Low To High</option>
            <option value="rating-desc">Rating: High To Low</option>
          </select>
        </div>
        <div className="h-full flex items-center gap-5 md:text-sm lg:text-[16px]">
          <h1 className="text-[14px] md:text-sm lg:text-[16px]">Show</h1>
          <select
            onChange={(e) => setProductCount(e.target.value)}
            className="md:w-15 lg:w-25 outline-none text-[14px] md:text-sm lg:text-[16px]"
            name=""
            id=""
          >
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
        </div>
      </div>

      <div className="hidden md:flex">
        <div
          onClick={() => setLayout("Grid")}
          className={`cursor-pointer ${
            layout === "Grid" ? "opacity-100 text-[#40BFFF]" : "opacity-60"
          } w-12 h-12 flex items-center justify-center`}
        >
          <Grid3x3 />
        </div>
        <div
          onClick={() => setLayout("List")}
          className={`cursor-pointer ${
            layout === "List" ? "opacity-100 text-[#40BFFF]" : "opacity-60"
          } w-12 h-12 flex items-center justify-center`}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
