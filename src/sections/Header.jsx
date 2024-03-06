import React from 'react'
import logo from "../assets/car-logo.png"
import { navLinks } from '../constants'
import ButtonCard from '../components/ButtonCard'
const Header = () => {
  return (
    <header className='py-1 sm:px-16 px-8 absolute z-10 w-full'>
        <div className='flex justify-between items-center w-full  text-bold'>
            <div className='flex items-center gap-4 '>
                <img src={logo} alt="Amigo Car Rentals Logo"  className='w-24 sm:w-[190px] h-auto'/>
                <p className=' text-2xl sm:text-4xl '>AmigoCar Rentals</p>
            </div>
            <nav className='flex justify-center gap-10 items-center list-none text-xl max-lg:hidden'>
                {
                    navLinks.map((link)=>(
                        <li key={link.label}><a href={link.href} >{link.label}</a></li>
                    ))
                }
            </nav>
            <div className='flex items-center gap-4 max-lg:hidden'>
                <h1 className='text-xl'>Sign In</h1>
                <ButtonCard label="Register"/>
            </div>
        </div>
    </header>
  )
}

export default Header
