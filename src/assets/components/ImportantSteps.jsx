import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Placeholder } from 'rsuite';
import check from '../images/check.svg';


function ImportantSteps() {
  return (
    <>
    <div id='steps' className='mt-[0px] bg-gray-50 pt-[0px] md:pt-[50px] pb-[10px] md:pb-[50px]'>
        <div className="relative w-[95%] lg:w-[90%] mx-auto">
            {/* Title */}
            <div className="w-full flex flex-col items-center justify-center mx-auto">
                <div className="playwrite-text text-[#303a42] text-center font-bold w-full text-[20px] lg:text-[25px]">
                IMPORTANT FIRST STEPS
                </div>
                <div className="text-[rgba(48,58,66,0.80)] text-center font-['Inter-Regular',_sans-serif] text-[15px] leading-[30px] font-normal" style={{ letterSpacing: "0.02em" }}>
                    To kick off your MBA journey, here are some essential steps to take:
                </div>
            </div>

            {/* Items lists */}
            <div className='w-[97%] lg:w-[80%] shadow-md pl-3 mx-auto mt-[20px] mb-[20px] rounded-md border border-solid border-gray-200'>
                <div className='w-[100%] flex flex-row items-start justify-center gap-1 mx-auto my-3'>
                    <img src={check} alt={check} className='w-8 h-8' />
                    <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal"> <span className='font-semibold'>Payment of Important Fees</span> <br /> After you have been offered admission, visit the school portal to pay the
                    required fees like Acceptance Fee, Medical Fee, LACACA Fee and Library Fee.
                    </div>
                </div>
                <div className='w-[100%] flex flex-row items-start justify-center gap-1 mx-auto my-3'>
                    <img src={check} alt={check} className='w-8 h-8' />
                    <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                    <span className='font-semibold'>School fee payment</span> <br /> The school fee payment can be made in two (2) installments of 70% and 30%.
                    </div>
                </div>
                <div className='w-[100%] flex flex-row items-start justify-center gap-1 mx-auto my-3'>
                    <img src={check} alt={check} className='w-8 h-8' />
                    <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                    <span className='font-semibold'>Activate Your LASU Student Portal</span> <br /> In order to access essential resources and information through the portal activate your LASU student portal and ensure you complete your course registration as soon as possible.
                    </div>
                </div>
                <div className='w-[100%] flex flex-row items-start justify-center gap-1 mx-auto my-3'>
                    <img src={check} alt={check} className='w-8 h-8' />
                    <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                    <span className='font-semibold'>Familiarize yourself with the campus to make your transition smoother</span>
                        <ul className='list-disc list-inside'>
                            <li>Class Venues: Know where your classes will take place.</li>
                            <li>Faculty Office: Find out where to meet your professors.</li>
                            <li>Library: Discover the resources available for your studies.</li>
                            <li>Cool Spots: Check out popular locations to relax or grab a bite.</li>
                        </ul> 
                    </div>
                </div>
                <div className='w-[100%] flex flex-row items-start justify-center gap-1 mx-auto my-3'>
                    <img src={check} alt={check} className='w-8 h-8' />
                    <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                        <span className='font-semibold'>Join Class WhatsApp Groups</span> <br />To stay updated on important announcement and get necessary reading materials. <a href='https://chat.whatsapp.com/DOkruJS6Epl8jqdeFZ29X5'>For further information</a>
                    </div>
                </div>
            </div>
        </div>

        {/*  */}
        <div id='people' className="flex flex-col items-start justify-center relative overflow-hidden">
            
            {/* Items lists */}
            <div className='w-[97%] lg:w-[40%] shadow-md pl-3 mx-auto mt-[20px] mb-[20px] rounded-md border border-solid border-gray-200'>
                <div className='w-[100%] flex flex-row items-center justify-center gap-1 mx-auto my-3'>
                    <div className="w-full text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal">
                    LASU is known for academic excellence, therefore you are advised to take all the lectures serious.
                    The pass mark is 50%. The scores are allocated based on examinations and CAs.
                    Exam is rated 70% while CA is 30%, the CA can be inform of Tests/Assignments/Attendances. <br /> This is where good relationship with the lecturer is required with good leadership from your set.

                    <ul>
                        <span>Grading</span>
                        <li><span className='font-semibold'>A</span> - 70% and above</li>
                        <li><span className='font-semibold'>B</span> - 60% - 69%</li>
                        <li><span className='font-semibold'>C</span> - 50% - 59%</li>
                        <li>Less than 50% is FAIL.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ImportantSteps