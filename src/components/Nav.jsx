import React from 'react'
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='bg-[#121212F0] h-16 flex justify-between items-center px-8 shadow-sm'>
      <header className='text-white font-bold'><a href="/">Arq. Jose Lopez | </a></header>
        <div className="flex justify-between gap-5">
          <a href="https://instagram.com/" target='_blank'><FaInstagram className='text-2xl text-white h-5 w-5' /></a>
          <a href="https://behance.net/" target='_blank'><FaBehance className='text-2xl text-white  h-5 w-5' /></a>
          <a href="https://linkedin.com/in/" target='_blank'><FaLinkedinIn className='text-2xl text-white h-5 w-5' /></a>
        </div>
    </nav>
  )
}

export default Nav
