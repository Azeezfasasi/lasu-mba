import React from 'react'
import event from '../images/event.svg';

function Network() {
  return (
    <>
    <div id='network' className="flex flex-col items-start justify-center relative overflow-hidden">
        {/* Title */}
        <div className="w-[95%] lg:w-[70%] flex flex-col items-center justify-start mx-auto border">
            <div className=" static">
                <div className="lg:w-[90%] text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] text-[25px] lg:text-[35px] font-bold">
                Your MBA network starts now, engage with your community from the start.
                </div>
            </div>
            <div className="text-[rgba(48,58,66,0.80)] text-center font-['Inter-Regular',_sans-serif] text-[18px] leading-[30px] font-normal" style={{ letterSpacing: "0.02em" }}
            >
                Below are upcoming important events:
            </div>
        </div>
        
        {/* Items lists */}
        <div className='w-[95%] lg:w-[50%] shadow-md px-3 py-6 mx-auto mt-[20px] mb-[20px] rounded-md border border-solid border-gray-200 flex flex-col items-start justify-start gap-0'>
            <div className='w-[100%] flex flex-row items-center justify-center gap-4 mx-auto my-3'>
                <img src={event} alt={event} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                LASUMBA Election: Participate in the voting process to choose the right team
                for your needs. Morad has the capacity to show!
                </div>
            </div>
            <div className='w-[100%] flex flex-row items-center justify-center gap-4 mx-auto my-3'>
                <img src={event} alt={event} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                MBA Orientation Program: Participate in this event that is organized and designed to welcome and integrate new students into the LASU MBA program.
                </div>
            </div>
            <div className='w-[100%] flex flex-row items-center justify-center gap-4 mx-auto my-3'>
                <img src={event} alt={event} className='w-8 h-8' />
                <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                Get involved and expand your network by joining LASUMBA and GBENUSI Community.
                </div>
            </div>
        </div>
    </div>

    {/* Bottom */}
    <div className='mt-[30px] mb-[30px]'>
        <div className="text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] text-[22px] lg:text-[35px] font-bold relative w-[90%] mx-auto">
        Closing Thought: As you begin this journey, remember to “enjoy the journey,
        not just the destination.” The future is in our hands and MORAD is committed
        to making this MBA experience smoother for everyone.
        </div>
    </div>
    </>
  )
}

export default Network