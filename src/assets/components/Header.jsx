import React from 'react';
import { Link } from 'react-scroll';
import morad from '../images/morad.png';
import MobileMenu from './MobileMenu';

function Header() {
  return (
    <>
      {/* For mobile devices */}
      <div className="lg:hidden h-[70px] flex flex-row items-center justify-between overflow-hidden px-10 shadow-md bg-white sticky top-0 z-50">
        <div>
          <img src={morad} alt="Logo" className="w-[130px] h-[50px]" />
        </div>
        <MobileMenu />
      </div>

      {/* For large devices */}
      <div className="hidden h-[70px] lg:flex flex-row items-center justify-between overflow-hidden px-10 shadow-md bg-white sticky top-0 z-50">
        {/* Logo */}
        <div>
          <img src={morad} alt="Logo" className="w-[130px] h-[50px]" />
        </div>
        {/* Links */}
        <div className="flex flex-row items-center justify-start gap-5 relative">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-left font-['InriaSans-Regular',_sans-serif] text-lg uppercase font-normal"
            style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
          >
            Home
          </Link>
          <Link
            to="mission"
            smooth={true}
            duration={500}
            className="cursor-pointer text-yellow-600 text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
            style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
          >
            Mission
          </Link>
          <Link
            to="community"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
            style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
          >
            Community
          </Link>
          <Link
            to="steps"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
            style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
          >
            Steps
          </Link>
          <Link
            to="people"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
            style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
          >
            People
          </Link>
          <Link
            to="network"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
            style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
          >
            Network
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;