import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import HeroModal from './HeroModal'

function Header() {
  const [isOpen, seIsOpen] = useState(false)
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset)
    })
  }, [])

  return (
    <header className={`py-8 fixed w-full ${scroll > 208 ? 'bg-[#72cbff]' : ''} duration-300 max-w-full flex items-center z-50 justify-between px-6 lg:px-8 text-white-color`}>
      <img src={logo} alt='logo' />
      <nav className='hidden lg:flex flex-row items-center space-x-10'>
        {["About", "Services", "Projects"]
          .map((item) => (
            <a key={item} className='font-normal' href="#">{item}</a>
          ))}
        <button className='px-6 py-3 bg-white text-dark-blue duration-200 hover:text-white hover:bg-desautred-blue rounded-3xl font-fraunces uppercase'>contact</button>
      </nav>
      <button onClick={() => seIsOpen(!isOpen)} className='block lg:hidden outline-none border-none'>
        <img src={hamburger} alt='hamburger' />
      </button>
      {isOpen && <HeroModal />}
    </header>
  )
}

export default Header
