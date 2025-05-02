import React from 'react';
import { Link } from 'react-scroll';
import hero from '../images/hero.png';
import hero3 from '../images/hero3.jpg';

function Hero() {
  return (
    <>
    <div id="home" className="flex flex-row items-center relative h-fit lg:h-[580px] w-full overflow-hidden py-[20px] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${hero3})` }}>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="flex flex-col items-center justify-center mx-auto h-fit p-2">
            <div className="w-full lg:w-[1120px] flex flex-col items-center justify-start gap-[20px] mx-auto pt-[20px] lg:pt-0">
                <div className="text-yellow-400 text-center font-['Poppins-Bold',_sans-serif] text-[30px] lg:text-[50px] font-bold">
                LASU MBA ONBOARDING TOOLKIT
                </div>
                <div className="text-[#ffffff] text-center font-['Poppins-Regular',_sans-serif] text-[16px] lg:text-[20px] font-normal">
                Dear Managers, welcome to the LASU MBA community!
                </div>
                <div className="text-[#ffffff] text-center font-['Poppins-Regular',_sans-serif] text-[16px] lg:text-[20px] font-normal">
                It’s Not Just About Academics
                <br />
                You’ll get far more from networking, collaborations, side projects, and
                informal meetups than from textbooks. Your classmates are CEOs,
                Consultants, and policymakers, connect wisely.
                </div>
            </div>

            {/* Hero buttons */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 z-10">
                <Link to="steps" smooth={true} duration={500} className="rounded-[10px] pt-[10px] md:pt-[19px] pr-10 pb-[10px] md:pb-[19px] pl-10 flex flex-row gap-2.5 items-start justify-start cursor-pointer no-underline hover:no-underline" style={{backgroundColor: "oklch(68.1% 0.162 75.834)", cursor: "pointer", textDecoration: "none"}}>
                    <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-lg font-bold relative no-underline hover:no-underline">
                    Important Steps
                    </div>
                </Link>

                <Link to="people" smooth={true} duration={500} className="rounded-[10px] border-2 border-solid border-yellow-500 pt-[10px] md:pt-[19px] pr-10 pb-[10px] md:pb-[19px] pl-10 flex flex-row gap-2.5 items-start justify-start cursor-pointer no-underline hover:no-underline" style={{cursor: "pointer", textDecoration: "none"}}>
                    <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-lg font-bold relative no-underline hover:no-underline">
                        People To Know
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero