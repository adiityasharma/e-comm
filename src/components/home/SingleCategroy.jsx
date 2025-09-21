import React from "react";

const SingleCategroy = ({ category }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-between h-full w-full  "
      key={category?.id}
    >
      <div className="border-1 border-[#d9e3ff] rounded-full p-5 md:px-10 md:py-10  ">
        <div className="text-[#40BFFF] scale-75 md:scale-100 hover:scale-150 transition-all duration-500">
          {category?.icon}
        </div>
      </div>
      <h1 className="text-[#9098B1] text-[15px] md:text-[20px] ">
        {category?.title}
      </h1>
    </div>
  );
};

export default SingleCategroy;
