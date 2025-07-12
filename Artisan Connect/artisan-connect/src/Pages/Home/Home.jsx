import React from 'react'
import "./Home.css"
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider'
import Navbar from '../../components/Navbar/Navbar'
import HomeProducts from '../../components/HomeProducts/HomeProducts'
import FProducts from '../../components/F-Products/F-Products'
import Banner from '../../components/Banner/Banner'
import News from '../../components/News/News'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="home">
      <HeaderSlider/>
      <HomeProducts/>
      <FProducts/>
      <Banner/>
      <News/>
      </div>
    </div>
  )
}

export default Home
