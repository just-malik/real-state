import React from 'react'
import Sec2Img from './Sec2Img'
const Sec2 = () => {
  return (
    <div className='h-auto text-center py-12 px-52'>
        <h1 className='text-[30px] font-sans font-semibold mb-5'>Properties by Area</h1>
        <p className='text-[#c3c7cc]'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
        <div className='grid grid-cols-3 gap-5 mt-6 '>
         <Sec2Img src='/Card 1.png' name='Centerville' />
         <Sec2Img src='/Card 2.png' name='Centerville' />
         <Sec2Img src='/Card 3.png' name='Centerville' />
        </div>
        <div className='grid grid-cols-2 mt-3 gap-5' >
        <Sec2Img src='/Card 4.png' name='Arlington'/>
        <Sec2Img src='/Card 5.png' name='Arlington'  />
        </div>
    </div>
  )
}

export default Sec2