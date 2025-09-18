import React from 'react'
import Sidebar from '../components/Sidebar'
import ImageCarousel from '../components/home/ImageCarousel'
import Categories from '../components/home/Categories'
import FlashSaleContainer from '../components/home/FlashSaleContainer'

const Home = () => {
  return (
    <div className='w-full z-10'>
      <ImageCarousel />
      <Categories />
      <FlashSaleContainer/>
    </div>
  )
}

export default Home