import React from 'react';
import morad from '../images/morad.png';
import MobileMenu from './MobileMenu';

function Header() {
  return (
    <>
    {/* For mobile devices */}
    <div className='lg:hidden h-[70px] flex flex-row items-center justify-between relative overflow-hidden px-10 shadow-md bg-white'>
        <div>
            <img src={morad} alt="Logo" className='w-[130px] h-[50px]' />
        </div>
        <MobileMenu />
    </div>

    {/* For large devices */}
    <div className="hidden h-[70px] lg:flex flex-row items-center justify-between relative overflow-hidden px-10 shadow-md bg-white">
        {/* Logo */}
        <div>
            <img src={morad} alt="Logo" className='w-[130px] h-[50px]' />
        </div>
        {/* Links */}
        <div className='flex flex-row items-center justify-start gap-5 relative'>
            <a href='' to="" className="text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase">
                Home
            </a>
            <a href='' to="" className="text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase">
                Mission
            </a>
            <a href='' to="" className="text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase">
                Steps
            </a>
            <a href='' className="text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase">
                People
            </a>
            <a href='' to="" className="text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase">
                Network
            </a>
        </div>
    </div>
    </>
  )
}

export default Header