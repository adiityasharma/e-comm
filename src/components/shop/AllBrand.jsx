import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../features/productSlice";
import { ChevronDown } from "lucide-react";

const AllBrand = ({ filterByBrand, setFilterByBrand, totalSortedProducts }) => {
  const { brands } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const [brandName, setBrandName] = useState([]);
  const [isBrandFilterOpen, setIsBrandFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  useEffect(() => {
    const filterdBrands = brands?.products
      ?.map((item) => item?.brand && item.brand)
      .filter((item) => item != undefined);

    setBrandName([...new Set(filterdBrands)]);
  }, [brands]);

  return (
    <div className="w-full h-full bg-[#F6F7F8] px-6 py-5 rounded-md">
      <div
        onClick={() => setIsBrandFilterOpen(!isBrandFilterOpen)}
        className="text-[18px] xl:text-[20px] font-[500] w-full flex items-center justify-between pr-2 cursor-pointer"
      >
        <h1 className="md:text-[15px] lg:text-[20px]">All Brands</h1>
        <div>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isBrandFilterOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isBrandFilterOpen && (
        <div className="mt-5 w-full h-fit">
          <ul className="flex flex-col gap-2 xl:gap-5">
            {brandName.map((item, index) => (
              <div
                onClick={() => setFilterByBrand(item)}
                key={index}
                className={` ${
                  filterByBrand === item ? "text-[#40BFFF]" : "text-[#262626]"
                } flex justify-between gap-1 text-[14px] xl:text-[18px] cursor-pointer`}
              >
                <li className="">{item}</li>
                <span
                  className={`${
                    filterByBrand === item ? "block" : "hidden"
                  }`}
                >
                  {totalSortedProducts}
                </span>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllBrand;
