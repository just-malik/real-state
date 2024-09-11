import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-20 py-8'>
        <Image  src='/Logo.png' width={100} height={44} alt='main-logo' />
        <div className='flex items-center gap-6 text-lg'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About Us</Link>
            <h4>Our Agents</h4>
            <h4 className='font-bold'>Properties</h4>
            <h4>Gallery</h4>
            <h4>Blog</h4>
            <Link href='/contact'>Contact Us</Link>
            <h4>Search</h4>
            <AiOutlineMenu className='w-7 h-7 cursor-pointer ml-3' />
        </div>
    </nav>
  )
}

export default Nav