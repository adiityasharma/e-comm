import React from 'react'


const brandNames = [
  "Nike",
  "Airmax",
  "Adidas",
  "Vans",
];

const AllBrand = () => {
  return (
    <div className="w-full h-full bg-[#F6F7F8] px-6 py-5 rounded-md">
      <h1 className="text-[20px] font-[500] ">Brand</h1>

      <div className="py-5 w-full h-fit">
        <ul className="flex flex-col gap-4">
          {brandNames.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-[18px] text-[#262626]"
            >
              <li className="">{item}</li>
              <span className="opacity-35 ">99</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllBrand