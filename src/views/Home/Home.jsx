import React from 'react'
import Hero from './Hero/Hero'
import Slide from './Slide/Slide'
import NextEvent from './NextEvent/NextEvent'
import MainArtiste from './MainArtiste/MainArtiste'

function Home() {
  return (
    <div>
        <Hero/>
        <Slide/>
        <NextEvent/>
        <MainArtiste/>
    </div>
  )
}

export default Home