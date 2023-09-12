import React from 'react'
import ProductInfo from './ProductInfo'

const Product = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
      <ProductInfo
        bg={"bg-graphic-mob lg:bg-graphic-desk"}
        title="Graphic design"
        desc={` Great design makes you memorable. 
        We deliver artwork that underscores your 
        brand message and captures potential 
        clients’ attention.`}
      />
       <ProductInfo
        bg={"bg-photography-mob lg:bg-photography-desk"}
        title="Photography"
        desc={`Increase your credibility by getting 
        the most stunning, high-quality photos 
        that improve your business image.`}
      />
    </div>
  )
}

export default Product
