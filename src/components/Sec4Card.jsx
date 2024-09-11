import React from 'react'
import Image from 'next/image'
import { IoShareSocialOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

const Sec4Card = (props) => {
  return (
    <div className='p-3 border-[1px] border-[#e2e6eb] rounded-md'> 
        <Image src={props.src} width={300} height={200} />
        <h4 className='font-semibold text-[12px] mt-3 mb-5'>92 ALLIUM PLACE, ORLANDO FL 32827</h4>
        <p className='text-[#4A60A1] text-[11px] font-bold  mb-4'>$590,663</p>
        <div className='flex gap-4 mb-5'>
            <Image src='/Parking.png'  width={28} height={23} />
            <Image src='/Bathrooms.png' width={28} height={23} />
            <Image src='/Size.png' width={65} height={23} />
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
             <Image src='/Ellipse 1.png' width={30} height={30} />
             <p className=' text-[11px] font-semibold '>John Doe</p>
            </div>
            <div className='flex items-center gap-3'>
                <IoShareSocialOutline className='text-[#4A60A1]' />
                <CiHeart className='text-[#4A60A1]' />
                <GoPlus className='text-[#4A60A1]' />
            </div>
        </div>
    </div>
  )
}

export default Sec4Card