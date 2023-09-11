import React from 'react'
import Activity from './Activity'

const Activities = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div
        className={`bg-transform-mob lg:h-[80vh] h-[50vh] lg:bg-transform-desk lg:order-2 order-1 bg-cover bg-center bg-no-repeat`}
      />
      <Activity
        title={"Transform your brand"}
        order={"lg:order-1 order-2"}
        color={"border-yellow-color"}
        desc={`
      We are a full-service creative agency 
      specializing in helping brands grow fast. 
      Engage your clients through compelling 
      visuals that do most of the marketing for you.
      `}
      />
      <div
        className={`bg-stand-out-mob lg:h-[70vh] h-[50vh] lg:bg-stand-out-desk order-3 bg-cover bg-center bg-no-repeat`}
      />
       <Activity
        title={"Stand out to the right audience"}
        desc={`
      Using a collaborative formula of designers, 
      researchers, photographers, videographers, 
      and copywriters, we’ll build and extend your 
      brand in digital places. 
      `}
        order={"order-4"}
        color={"border-red-color"}
      />
    </div>
  )
}

export default Activities
