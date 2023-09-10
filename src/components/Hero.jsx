import React from 'react'
import arrow from '../assets/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div className='hero-bg py-20 flex items-center lg:items-start lg:py-64 h-screen'>
      <div className='mx-auto text-white-color flex flex-col space-y-16 lg:space-y-20 items-center'>
        <h1 className='font-fraunces text-5xl text-center lg:text-9xl uppercase tracking-widest'>we are creatives</h1>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Hero
