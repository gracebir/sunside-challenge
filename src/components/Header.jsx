import React from 'react'
import logo from '../assets/logo.svg'
import hamburger  from '../assets/icon-hamburger.svg'

function Header() {
  return (
    <header className="bg-moderate-cyan py-8 max-w-full flex items-center justify-between px-8 text-white-color">
      <img src={logo} alt='logo' />
      <nav className='hidden lg:flex flex-row items-center space-x-10'>
        {["About", "Services", "Projects"]
          .map((item) => (
            <a key={item} className='font-normal' href="#">{item}</a>
          ))}
        <button className='px-6 py-3 bg-white text-dark-blue duration-200 hover:text-white hover:bg-desautred-blue rounded-3xl font-fraunces uppercase'>contact</button>
      </nav>
      <button className='block lg:hidden outline-none border-none'>
        <img src={hamburger} alt='hamburger'/>
      </button>
    </header>
  )
}

export default Header
