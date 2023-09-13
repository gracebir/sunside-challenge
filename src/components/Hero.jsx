import React from 'react'
import arrow from '../assets/icon-arrow-down.svg'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '../utils/motion'

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='hero-bg py-20 flex items-center lg:items-start lg:py-64 h-screen'>
      <motion.div className='mx-auto text-white-color flex flex-col space-y-16 lg:space-y-20 items-center'>
        <motion.h1 variants={textVariant(1.1)} className='font-fraunces text-5xl text-center lg:text-9xl uppercase tracking-widest'>we are creatives</motion.h1>
        <motion.img variants={textVariant(1.2)} src={arrow} alt="arrow" />
      </motion.div>
    </motion.div>
  )
}

export default Hero
