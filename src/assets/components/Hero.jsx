import React from 'react'

function Hero() {
  return (
    <>
    <div className="flex flex-row items-center relative bg-blue-500 h-fit lg:h-[580px] w-full overflow-hidden py-[20px]">
        <div className="flex flex-col items-center justify-center mx-auto h-fit p-2">
            <div className="w-full lg:w-[1120px] flex flex-col items-center justify-start gap-[20px] mx-auto pt-[20px] lg:pt-0">
                <div className="text-[#ffffff] text-center font-['Poppins-Bold',_sans-serif] text-[34px] lg:text-[55px] font-bold">
                LASU MBA ONBOARDING TOOLKIT
                </div>
                <div className="text-[#ffffff] text-center font-['Poppins-Regular',_sans-serif] text-[18px] lg:text-[24px] font-normal">
                Dear Managers, welcome to the LASU MBA community!
                </div>
                <div className="text-[#ffffff] text-center font-['Poppins-Regular',_sans-serif] text-[18px] lg:text-[24px] font-normal">
                It’s Not Just About Academics
                <br />
                You’ll get far more from networking, collaborations, side projects, and
                informal meetups than from textbooks. Your classmates are CEOs,
                Consultants, and policymakers, connect wisely.
                </div>
            </div>

            {/* Hero buttons */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-10">
                <div className="bg-[#0093ff] rounded-[10px] pt-[19px] pr-10 pb-[19px] pl-10 flex flex-row gap-2.5 items-start justify-start border-solid border-[#ffffff] border">
                    <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-lg font-bold relative">
                        Important Steps
                    </div>
                </div>
                <div className="rounded-[10px] border-solid border-[#ffffff] border pt-[19px] pr-10 pb-[19px] pl-10 flex flex-row gap-2.5 items-start justify-start">
                    <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-lg font-bold relative">
                        Read FAQs
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero