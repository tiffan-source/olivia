import React from 'react'
import Hero from './Hero/Hero'
import Slide from './Slide/Slide'
import NextEvent from './NextEvent/NextEvent'
import MainArtiste from './MainArtiste/MainArtiste'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <Slide/>
        <NextEvent/>
        <MainArtiste/>

        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home