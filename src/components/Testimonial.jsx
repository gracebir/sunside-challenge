import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const Testimonial = ({ avatar, name, testimial, role, delay }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='flex flex-col gap-8 lg:gap-12 items-center text-center'>
      <motion.img variants={fadeIn('up', 'tween', 0.1 * delay + 1, 1)} className='h-20 w-20 rounded-full' src={avatar} alt={name} />
      <motion.p variants={fadeIn('up', 'tween', 0.1 * delay + 1, 1)}  className='text-xl text-grayish-very leading-9'>{testimial}</motion.p>
      <motion.div variants={fadeIn('up', 'tween', 0.1 * delay + 1, 1)}  className='flex flex-col gap-4'>
        <span className='text-lg lg:text-xl font-fraunces'>{name}</span>
        <span>{role}</span>
      </motion.div>
    </motion.div>
  )
}

export default Testimonial

