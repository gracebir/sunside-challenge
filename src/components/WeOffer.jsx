import React from 'react'
import Offer from './Offer'

const WeOffer = () => {
    let bgOffer = [
        "bg-milk-mob lg:bg-milk-desk", 
        "bg-orange-mob lg:bg-orange-desk",
        "bg-cone-mob lg:bg-cone-desk",
        "bg-sugar-mob lg:bg-sugar-desk "
    ]
  return (
    <div className='lg:h-[60vh] h-[50vh] grid grid-cols-2 lg:grid-cols-4'>
      {bgOffer.map((item)=> (
        <Offer key={item} bgImage={item} />
      ))}
    </div>
  )
}

export default WeOffer
