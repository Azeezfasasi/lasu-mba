import React from 'react';
import check from '../images/check.svg';

function PeopleToKnow() {
  return (
    <>
    <div id='people' className="flex flex-col items-start justify-center relative overflow-hidden pt-[40px] pb-[40px] bg-gray-100">
        {/* Title */}
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-start mx-auto">
            <div className=" static">
                <div className="playwrite-text text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] text-[20px] lg:text-[25px] font-bold">
                PEOPLE TO KNOW
                </div>
            </div>
            <div className="lg:w-[70%] text-[rgba(48,58,66,0.80)] text-center font-['Inter-Regular',_sans-serif] text-[15px] leading-[30px] font-normal"
                style={{ letterSpacing: "0.02em" }}
            >
                Building connections is vital to your MBA experience. Get to know the
                key people who will support you throughout your studies
            </div>
        </div>
        
        {/* Items lists */}
        <div className='w-[97%] lg:w-[40%] shadow-md pl-3 mx-auto mt-[20px] mb-[20px] rounded-md border border-solid border-gray-200'>
            <div className='w-[100%] flex flex-row items-center justify-center gap-1 mx-auto my-3'>
                <img src={check} alt={check} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                    Coordinator of MBA Program
                </div>
            </div>
            <div className='w-[100%] flex flex-row items-center justify-center gap-1 mx-auto my-3'>
                <img src={check} alt={check} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                Dean of Post Graduate School
                </div>
            </div>
            <div className='w-[100%] flex flex-row items-center justify-center gap-1 mx-auto my-3'>
                <img src={check} alt={check} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                Program Secretary
                </div>
            </div>
            <div className='w-[100%] flex flex-row items-center justify-center gap-1 mx-auto my-3'>
                <img src={check} alt={check} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                LASUMBA Executives
                </div>
            </div>
            <div className='w-[100%] flex flex-row items-center justify-center gap-1 mx-auto my-3'>
                <img src={check} alt={check} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                GBENUSI Community
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default PeopleToKnow