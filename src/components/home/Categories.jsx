import { Brush, Footprints, Glasses, Handbag, Shirt, Sofa } from "lucide-react";
import React from "react";
import SingleCategroy from "./SingleCategroy";
import { Link } from "react-router-dom";

const shopCategories = [
  {
    id: 1,
    title: "Man Shirt",
    icon: <Shirt size={50} />,
    slug: "mens-shirts",
  },
  {
    id: 2,
    title: "Beauty",
    icon: <Brush size={50} />,
    slug: "beauty",
  },
  {
    id: 3,
    title: "Woman Bag",
    icon: <Handbag size={50} />,
    slug: "womens-bags",
  },
  {
    id: 4,
    title: "Man Shoes",
    icon: <Footprints size={50} />,
    slug: "mens-shoes",
  },
  {
    id: 5,
    title: "Sunglasses",
    icon: <Glasses size={50} />,
    slug: "sunglasses",
  },
  {
    id: 6,
    title: "Furniture",
    icon: <Sofa size={50} />,
    slug: "furniture",
  },
];

const Categories = () => {
  return (
    <div className="w-full p-4 md:p-0">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-5xl font-bold">Category</h1>
        <Link
          to={"/shop"}
          className="text-xl md:text-5xl cursor-pointer hover:opacity-80 text-[#40BFFF] font-bold"
        >
          More Categories
        </Link>
      </div>
      <div className="w-full h-fit flex flex-nowrap overflow-x-scroll md:overflow-hidden md:grid grid-cols-4 md:grid-cols-6 mt-10 gap-2 md:gap-5 ">
        {shopCategories.map((category) => (
          <Link key={category.id} to={`category/${category?.slug}`}>
            <SingleCategroy category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
