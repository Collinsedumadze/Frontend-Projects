import React from 'react'
import "./Home.css"
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider'
import Navbar from '../../components/Navbar/Navbar'
import HomeProducts from '../../components/HomeProducts/HomeProducts'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="home">
      <HeaderSlider/>
      <HomeProducts/>
      </div>
    </div>
  )
}

export default Home
