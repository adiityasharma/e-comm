import React from 'react'


import { Grid3x3, Menu } from 'lucide-react';

const FilterBar = () => {


  return (
    <div className="w-full h-15 md:h-12 lg:h-15 flex justify-between px-3 md:px-3 lg:px-5 text-[#22262A] items-center rounded bg-[#F1F3F4]">
      <div className="w-full md:w-fit flex items-center gap-5 md:gap-4 lg:gap-10 ">
        <h1 className=" md:text-sm lg:text-[16px]">13 Items</h1>
        <div className="h-full flex items-center gap-5">
          <h1 className="md:text-sm lg:text-[16px]">Sort By</h1>
          <select
            className="md:w-20 lg:w-25 outline-none md:text-sm lg:text-[16px] "
            name=""
            id=""
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="hot">Hot</option>
          </select>
        </div>
        <div className="h-full flex items-center gap-5 md:text-sm lg:text-[16px]">
          <h1 className="md:text-sm lg:text-[16px]">Show</h1>
          <select
            className="md:w-15 lg:w-25 outline-none md:text-sm lg:text-[16px]"
            name=""
            id=""
          >
            <option className="" value="6">
              6
            </option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
        </div>
      </div>

      <div className="hidden md:flex">
        <div className="cursor-pointer opacity-60 w-12 h-12 flex items-center justify-center">
          <Grid3x3 />
        </div>
        <div className="cursor-pointer opacity-60 w-12 h-12 flex items-center justify-center">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default FilterBar