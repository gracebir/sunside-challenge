import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const Activity = ({ title, desc, order, color }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${order} flex items-center px-10 lg:px-0 h-[50vh] lg:h-auto`}>
      <motion.div className='max-w-sm mx-auto flex flex-col gap-6 items-center text-center lg:text-start lg:items-start'>
        <motion.h1
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="font-fraunces text-4xl">{title}</motion.h1>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="text-grayish-dark">{desc}</motion.p>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className='flex flex-col'>
          <a className='font-fraunces uppercase z-10' href="#">Learn more</a>
          <span className={`border-4 ${color} rounded-xl -mt-2`}></span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Activity
