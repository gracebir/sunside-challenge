import React from 'react'

const ProductInfo = ({bg, title, desc}) => {
  return (
    <div className={`${bg} bg-no-repeat lg:h-[80vh] h-[60vh] bg-cover bg-top flex items-end pb-8 lg:pb-16 px-8 lg:px-0`}>
      <div className='max-w-sm mx-auto flex flex-col items-center text-center gap-8 text-cyan-color'>
        <h1 className='font-fraunces lg:text-3xl text-2xl'>{title}</h1>
        <p className='text-base lg:text-lg'>{desc}</p>
      </div>
    </div>
  )
}

export default ProductInfo
