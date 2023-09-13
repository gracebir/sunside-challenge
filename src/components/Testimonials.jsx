import React from 'react'
import { emily, thomas, jennie } from '../assets/index'
import Testimonial from './Testimonial'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const data = [
  {
    id: 1,
    name: "Emily R.",
    avatar: emily,
    role: "Marketing Director",
    testimial: `We put our trust in Sunnyside and 
    they delivered, making sure 
    our needs were met and deadlines were 
    always hit.`
  },
  {
    id: 2,
    name: "Thomas S.",
    avatar: thomas,
    role: "Chief Operating Officer",
    testimial: `Sunnyside’s enthusiasm coupled with their 
    keen interest in our brand’s success made it a 
    satisfying and enjoyable experience.`
  },
  {
    id: 3,
    name: "Jennie F.",
    avatar: jennie,
    role: "Business Owner",
    testimial: `Incredible end result!
     Our sales increased over 400% when 
     we worked with Sunnyside. Highly recommended!`
  },
]

const Testimonials = () => {
  return (
    <div className='flex items-center min-h-screen py-10 lg:py-0 px-8 lg:px-0'>
      <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
       className='container mx-auto flex flex-col gap-8 lg:gap-16 items-center'>
        <motion.h1 variants={textVariant(1.1)} className='font-fraunces text-grayish-blue uppercase text-2xl'>Client testimonials</motion.h1>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 lg:flex-row gap-14 lg:gap-16'>
          {data.map((item, key) => (
            <Testimonial delay={key} {...item} key={item.id} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonials
