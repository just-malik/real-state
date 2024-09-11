import React from 'react'
import Sec4Card from './Sec4Card'


const Sec4 = () => {
  return (
    <div className=' my-20 px-14 '>
        <h1 className='text-center text-[30px] font-sans font-semibold mb-5'>Latest Properties of Rent</h1>
        <p className='text-center text-[#c3c7cc]'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere<br/> cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
        <div className='flex justify-center mt-5 gap-6'>
           <Sec4Card src='/Property image-5.png'/>
           <Sec4Card src='/Property image-6.png'/> 
           <Sec4Card src='/Property image-7.png'/> 
           <Sec4Card src='/Property image-8.png'/> 
        </div>
    </div>
  )
}

export default Sec4