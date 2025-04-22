import React from 'react';
import mission from '../images/mission.svg';

function Mission() {
  return (
    <>
    <div className="flex flex-row items-center justify-center mx-auto shadow-md px-2 mt-[10px]">
        <div className='flex flex-col lg:flex-row items-center justify-center bg-[#f7f8fa] mt-10 mb-10 mx-auto px-3'>
            <div className="w-[95%] lg:w-[50%] static">
                <div className="w-full lg:w-[409px] h-[98px] flex flex-col items-center lg:items-start justify-center">
                    <div className="text-[#0093ff] text-center font-['Poppins-Regular',_sans-serif] text-3xl font-normal">
                        MISSION
                    </div>
                    <div className="text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] text-[25px] lg:text-[35px] font-bold">
                        LASU MBA COMMUNITY
                    </div>
                </div>
                <div className="text-[#303a42] text-left font-['Inter-Regular',_sans-serif] text-xl leading-[35px] font-normal">
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