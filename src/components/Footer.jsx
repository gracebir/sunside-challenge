import React from 'react'
import { facebook, instagram, twitter, pinterest, logo } from '../assets/index'

const Footer = () => {
  return (
    <footer className='bg-moderate-cyan py-10 lg:py-14 flex items-center '>
      <div className='max-w-xs mx-auto flex-1 flex flex-col gap-10 lg:gap-12'>
        <div className='flex flex-col gap-8 lg:gap-10 items-center w-full'>
          <img className='fill-dark-blue h-8' src={logo} alt="logo-footer" />
          <div className='flex justify-between flex-1 w-full'>
            {["About", "Services", "Project"]
              .map((item) => (
                <a className='text-lg text-cyan-color' key={`${item}-footer`} href="#">
                  {item}
                </a>
              ))
            }
          </div>
        </div>
        <div className='flex gap-4 lg:gap-6 justify-center'>
          {[{ id: 1, logo: facebook }, { id: 2, logo: instagram }, { id: 3, logo: twitter }, { id: 4, logo: pinterest }].map((item, key) => (
            <a key={`${item.id}-item`} href="">
              <img className='fill-dark-blue text-dark-blue' src={item.logo} alt={`img-${key}`} />
            </a>
          ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
