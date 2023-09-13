import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const ProductInfo = ({bg, title, desc}) => {
  return (
    <div className={`${bg} bg-no-repeat lg:h-[80vh] h-[70vh] bg-cover bg-top flex items-end pb-8 lg:pb-16 px-8 lg:px-0`}>
      <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
       className='max-w-sm mx-auto flex flex-col items-center text-center gap-8 text-cyan-color'>
        <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className='font-fraunces lg:text-3xl text-2xl'>{title}</motion.h1>
        <motion.p variants={fadeIn('up', 'tween', 0.3, 1)} className='text-base lg:text-lg'>{desc}</motion.p>
      </motion.div>
    </div>
  )
}

export default ProductInfo
