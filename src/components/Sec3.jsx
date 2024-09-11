import React from 'react'
import Sec3Card from './Sec3Card'
const Sec3 = () => {
  return (
    <div className=' bg-[#edeff6] pt-24 pb-12 px-32'>
        <h1 className='text-center text-[30px] font-sans font-semibold mb-5'>Properties by Area</h1>
        <p className='text-center text-[#c3c7cc]'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
        <div className='grid grid-cols-4 mr-5 gap-12'>
            <Sec3Card src='/icon.png'  name='Sell your Home'/>
            <Sec3Card src='/icon-2.png' name='Rent Your Home' />
            <Sec3Card src='/icon-3.png' name='Buy a Home'/>
            <Sec3Card src='/icon-4.png' name='Free Marketing '/>
        </div>
    </div>
  )
}

export default Sec3