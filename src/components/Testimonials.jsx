import React from 'react'
import { emily, thomas, jennie } from '../assets/index'
import Testimonial from './Testimonial'

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
    <div>
      <h1></h1>
      <div>
        {data.map((item)=>(
          <Testimonial {...item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
