import React from "react";

const Pagination = ({ pageNo, setPageNo, totalProducts }) => {
  const prevPageNoArr = Array.from(
    { length: 2 },
    (_, index) => pageNo - 1 - index
  )
    .filter((item) => item > 0)
    .reverse();

  const nextPageNoArr = Array.from({ length: 3 }, (_, index) => pageNo + index);

  const noOfPages = [...prevPageNoArr, ...nextPageNoArr];

  return (
    <div className="w-full h-15 md:h-12 lg:h-15 flex justify-center px-3 md:px-3 lg:px-5 text-[#22262A] items-center rounded bg-[#F1F3F4]">
      {noOfPages.map((item) => (
        <div
          onClick={() => setPageNo(item)}
          key={item}
          className={` ${
            pageNo === item && "bg-[#40BFFF] text-white"
          } w-15 h-full flex items-center justify-center cursor-pointer select-none hover:border-2 hover:border-[#d3d3d3]`}
        >
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
