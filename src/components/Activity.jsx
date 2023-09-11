import React from 'react'

const Activity = ({ title, desc, order, color }) => {
  return (
    <div className={`${order} flex items-center px-10 lg:px-0 h-[50vh] lg:h-auto`}>
      <div className='max-w-sm mx-auto flex flex-col gap-6 items-center text-center lg:text-start lg:items-start'>
        <h1 className="font-fraunces text-4xl">{title}</h1>
        <p className="text-grayish-dark">{desc}</p>
        <div className='flex flex-col'>
          <a className='font-fraunces uppercase z-50' href="#">Learn more</a>
          <span className={`border-4 ${color} rounded-xl -mt-2`}></span>
        </div>
      </div>
    </div>
  )
}

export default Activity
