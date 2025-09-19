import React from 'react'
import Color from './Color';

const ColorFilter = () => {
  return (
    <div className="w-full bg-[#F6F7F8] py-5 px-6 rounded-md">
      <h1 className="text-[20px] font-[500] ">Color</h1>
      <div className='w-full flex mt-4'>
        <Color colors={["red", "blue", "yellow", "green", "skyblue", "aqua", "brown", "black"]} />
      </div>
    </div>
  );
}

export default ColorFilter