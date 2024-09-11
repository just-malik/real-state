import React from 'react'
import Image from 'next/image'
const Sec3Card = (props) => {
  return (
    <div className='mt-5 bg-white flex flex-col gap-5 py-4 pl-4'>
        <Image src={props.src} width={50} height={50} />
        <h4 className='font-bold'>{props.name}</h4>
        <p className='text-[#c3c7cc]'>We do a free evaluation to be sure you want to start selling.</p>
        <a className='text-[#4A60A1] text-sm' href=''>Read More</a>
    </div>
  )
}

export default Sec3Card