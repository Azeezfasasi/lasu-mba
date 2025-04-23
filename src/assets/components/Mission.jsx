import React from 'react';
import mission from '../images/mission.svg';

function Mission() {
  return (
    <>
    <div id='mission' className="flex flex-row items-center justify-center mx-auto shadow-md px-2 bg-[#f7f8fa] pt-5 md:pt-10 pb-10">
        <div className='flex flex-col lg:flex-row items-center justify-center bg-[#f7f8fa] mx-auto px-3'>
            <div className="w-[95%] lg:w-[50%] static">
                <div className="w-full lg:w-[409px] h-[98px] flex flex-col items-center lg:items-start justify-center">
                    <div className="text-yellow-500 text-center font-['Poppins-Regular',_sans-serif] text-[25px] font-normal">
                        MISSION
                    </div>
                    <div className="text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] text-[25px] lg:text-[25px] font-bold">
                        LASU MBA COMMUNITY
                    </div>
                </div>
                <div className="text-[#303a42] text-left font-['Inter-Regular',_sans-serif] text-[15px] leading-[35px] font-normal">
                We’re thrilled to have you join us on this exciting journey and as you
                embark on this transformative and exciting experience, we want you to know
                that you're not alone. You're part of a vibrant community of like-minded
                individuals who are passionate about learning, growth, making positive
                impact and ready to support and inspire each other.
                </div>
            </div>
            <div className='flex flex-row items-center justify-center mb-[-70px] h-fit'>
                <img
                    className="w-full"
                    src={mission}
                    alt={mission}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default Mission