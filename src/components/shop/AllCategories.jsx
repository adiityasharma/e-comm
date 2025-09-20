import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
} from "../../features/productSlice";
import { ChevronDown } from "lucide-react";

const AllCategories = ({ searchCategory, setSearchCategory }) => {
  const { categories } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [isCategory, setIsCategory] = useState(false);
  

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className="w-full h-full bg-[#F6F7F8] py-5 px-6 rounded-md">
      <div
        onClick={() => setIsCategory(!isCategory)}
        className="text-[18px] xl:text-[20px] font-[500] w-full flex items-center justify-between pr-2 cursor-pointer"
      >
        <h1 className="md:text-[15px] lg:text-[20px]">All Categories</h1>
        <div>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isCategory ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isCategory && (
        <div className="mt-7">
          <ul className="flex flex-col gap-2 xl:gap-5">
            {categories?.map((item, index) => (
              <div
                onClick={() => setSearchCategory(item.slug)}
                key={item.slug}
                className={` ${
                  searchCategory === item.slug
                    ? "text-[#40BFFF]"
                    : "text-[#262626]"
                } flex justify-between gap-1 text-[14px] xl:text-[18px] cursor-pointer`}
              >
                <li className="">{item.name}</li>
                <span className="opacity-35 ">99</span>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
