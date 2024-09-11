import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='grid grid-cols-4 px-8 py-4 gap-20 justify-center'>
        <div>
          <Image src='/Logo.png' width={120} height={40} />
          <h1 className='font-semibold'>Contact Us</h1>
          <p className='text-sm text-[#6e7276]'>Call : +123 400 123</p>
          <p className='text- text-[#6e7276]'>Praesent nulla massa, hendrerit<br /> vestibulum gravida in, feugiat auctor felis.</p>
          <p className='font-semibold text-sm'>Email: example@mail.com</p>
          <div className='flex gap-3 mt-3'>
            <FaFacebookF className='text-lg text-[#4A60A1]'  />
            <FaInstagram className='text-lg text-[#4A60A1]' />
            <FaLinkedinIn className='text-lg text-[#4A60A1]' />
            <FaTwitter className='text-lg text-[#4A60A1]' />
            <FaWhatsapp className='text-lg text-[#4A60A1]'/>
          </div>
        </div>
        <div>
            <h1 className='font-semibold mb-4'>Features</h1>
            <div className='flex flex-col gap-1 text-[#6e7276]'>
                <p>Home</p>
                <p>Become a Host</p>
                <p>Pricing</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </div>
        <div>
        <h1 className='font-semibold mb-4'>Company</h1>
            <div className='flex flex-col gap-1 text-[#6e7276]'>
                <p>About Us</p>
                <p>Press</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
        </div>
        <div className=' text-right'>
        <h1 className='font-semibold mb-4 '>Team and Policies</h1>
            <div className='flex flex-col gap-1  text-[#6e7276]'>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Security</p>
            </div>
        </div>
    </div>
  )
}

export default Footer