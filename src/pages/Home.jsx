import React from "react";
import ImageCarousel from "../components/home/ImageCarousel";
import Categories from "../components/home/Categories";
import SaleContainer from "../components/home/SaleContainer";
import RecommendProductBanner from "../components/home/RecommendProductBanner";
import RecomendProducts from "../components/home/RecomendProducts";

const flashDeals = [
  {
    id: 177,
    title: "Black Women's Gown",
    price: 129.99,
    discountPercentage: 10.48,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
  },
  {
    id: 178,
    title: "Corset Leather With Skirt",
    category: "womens-dresses",
    price: 89.99,
    discountPercentage: 9.48,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
  },
  {
    id: 88,
    title: "Nike Air Jordan 1 Red And Black",
    category: "mens-shoes",
    price: 149.99,
    discountPercentage: 15.8,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
  },
  {
    id: 154,
    title: "Black Sun Glasses",
    category: "sunglasses",
    price: 29.99,
    discountPercentage: 4.94,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp",
  },
];

const megaSale = [
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    category: "laptops",
    price: 1999.99,
    discountPercentage: 4.69,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
  },
  {
    id: 113,
    title: "Generic Motorcycle",
    category: "motorcycle",
    price: 3999.99,
    discountPercentage: 12.1,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
  },
  {
    id: 121,
    title: "iPhone 5s",
    category: "smartphones",
    price: 199.99,
    discountPercentage: 12.91,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
  },
  {
    id: 163,
    title: "Girl Summer Dress",
    category: "tops",
    price: 19.99,
    discountPercentage: 19.2,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
  },
];

const recomendetion = [
  {
    id: 165,
    title: "Short Frock",
    category: "tops",
    price: 24.99,
    discountPercentage: 13.45,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
  },
  {
    id: 156,
    title: "Green and Black Glasses",
    category: "sunglasses",
    price: 34.99,
    discountPercentage: 1.01,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp",
  },
  {
    id: 172,
    title: "Blue Women's Handbag",
    category: "womens-bags",
    price: 49.99,
    discountPercentage: 17.88,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
  },
  {
    id: 185,
    title: "Black & Brown Slipper",
    category: "womens-shoes",
    price: 19.99,
    discountPercentage: 3.33,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
  },
];

const Home = () => {
  return (
    <div className="w-full z-10">
      <ImageCarousel duration={1000 * 60 * 60 * 2} />
      <Categories />
      <SaleContainer
        data={flashDeals}
        title={"Flash Sale"}
        buttonText={"See More"}
      />
      <SaleContainer
        data={megaSale}
        title={"Mega Sale"}
        buttonText={"See More"}
      />
      <RecommendProductBanner />
      <RecomendProducts data={recomendetion} />
    </div>
  );
};

export default Home;
