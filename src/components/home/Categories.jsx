import { Brush, Footprints, Handbag, Shirt } from "lucide-react";
import React from "react";
import SingleCategroy from "./SingleCategroy";

const shopCategories = [
  {
    id: 1,
    title: "Man Shirt",
    icon: <Shirt size={50} />,
  },
  {
    id: 2,
    title: "Beauty",
    icon: <Brush size={50} />,
  },
  {
    id: 3,
    title: "Woman Bag",
    icon: <Handbag size={50} />,
  },
  {
    id: 4,
    title: "Man Shoes",
    icon: <Footprints size={50} />,
  },
  {
    id: 5,
    title: "Dress",
    icon: <Shirt size={50} />,
  },
  {
    id: 6,
    title: "Saree",
    icon: <Shirt size={50} />,
  },
];

const Categories = () => {
  return (
    <div className="w-full p-4 md:p-0">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-5xl font-bold">Category</h1>
        <button className="text-xl md:text-5xl cursor-pointer hover:opacity-80 text-[#40BFFF] font-bold">
          More Categories
        </button>
      </div>
      <div className="w-full h-fit flex flex-nowrap overflow-x-scroll md:overflow-hidden md:grid grid-cols-4 md:grid-cols-6 mt-10 gap-2 md:gap-5">
        {shopCategories.map((category) => (
          <SingleCategroy key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
