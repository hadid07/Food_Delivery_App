import React from 'react'
import Hero from '../Components/Hero'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Menu/>
        <Footer/>
    </div>
  )
}

export default Home