import React from 'react'
import morad from '../images/morad.png';
import moradcares from '../images/moradcares.png';

function Footer() {
  return (
    <>
    <div className="bg-[#161b1f] h-[126px] flex-col flex lg:flex-row items-center justify-center gap-4">
        <div>
            <img src={moradcares} alt="Logo" className='w-[130px] h-[50px] rounded-[7px]' />
        </div>
        <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-lg font-normal">
            2025 Copyrite. All Right Reserved
        </div>
    </div>

    </>
  )
}

export default Footer