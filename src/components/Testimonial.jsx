import React from 'react'

const Testimonial = ({avatar, name, testimial, role}) => {
  return (
    <div className='flex flex-col gap-8 lg:gap-12 items-center text-center'>
      <img className='h-20 w-20 rounded-full' src={avatar} alt={name} />
      <p className='text-xl text-grayish-very leading-9'>{testimial}</p>
      <div className='flex flex-col gap-4'>
        <span className='text-lg lg:text-xl font-fraunces'>{name}</span>
        <span>{role}</span>
      </div>
    </div>
  )
}

export default Testimonial

