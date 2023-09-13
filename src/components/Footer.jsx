import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare, FaPinterest } from 'react-icons/fa'
import { logoFooter } from '../assets/index'

const Footer = () => {
  return (
    <footer className='bg-moderate-cyan py-10 lg:py-14 flex items-center '>
      <div className='max-w-xs mx-auto flex-1 flex flex-col gap-10 lg:gap-12'>
        <div className='flex flex-col gap-8 lg:gap-10 items-center w-full'>
          <img className='fill-dark-blue h-8' src={logoFooter} alt="logo-footer" />
          <div className='flex justify-between flex-1 w-full'>
            {["About", "Services", "Project"]
              .map((item) => (
                <a className='text-lg text-cyan-color hover:text-white-color' key={`${item}-footer`} href="#">
                  {item}
                </a>
              ))
            }
          </div>
        </div>
        <div className='flex gap-4 lg:gap-6 justify-center'>
          {[FaFacebookSquare, BsInstagram, BsTwitter,FaPinterest].map((Item, key) => (
            <a className='text-cyan-color hover:text-white-color' key={`${key}-item`} href="#">
              <Item size={25} />
            </a>
          ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
