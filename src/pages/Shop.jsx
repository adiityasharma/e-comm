import React from 'react'
import Sidebar from '../components/shop/Sidebar'
import Banner from '../components/shop/Banner'
import FilterBar from '../components/shop/FilterBar';

const Shop = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-3 xl:gap-5 sm:mt-5 p-4 md:p-0 ">
      <div className="w-full h-full md:w-[250px] lg:w-[300px] xl:w-[25%]">
        <Sidebar />
      </div>
      <div className="w-full xl:w-[75%] flex flex-col gap-4">
        <Banner />
        <FilterBar/>
      </div>
    </div>
  );
}

export default Shop