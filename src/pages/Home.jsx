import React from 'react'
import Sidebar from '../components/Sidebar'
import ImageCarousel from '../components/home/ImageCarousel'
import Categories from '../components/home/Categories'
import SaleContainer from "../components/home/SaleContainer";
import RecommendProductBanner from '../components/home/RecommendProductBanner';
import RecomendProducts from '../components/home/RecomendProducts';

const Home = () => {
  return (
    <div className="w-full z-10">
      <ImageCarousel />
      <Categories />
      <SaleContainer title={"Flash Sale"} buttonText={"See More"} />
      <SaleContainer title={"Mega Sale"} buttonText={"See More"} />
      <RecommendProductBanner />
      <RecomendProducts/>
    </div>
  );
}

export default Home