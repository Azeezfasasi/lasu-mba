import React from 'react';
import { Accordion, Placeholder } from 'rsuite';

function ImportantSteps() {
  return (
    <>
    <div className='mt-[60px] mb-[60px]'>
        <div className="relative w-[95%] lg:w-[90%] mx-auto">
            {/* Title */}
            <div className="flex flex-col items-center justify-center mx-auto">
                <div className="text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] w-full lg:w-[28px] text-[25px] lg:text-[35px] font-bold">
                IMPORTANT FIRST STEPS
                </div>
                <div className="text-[rgba(48,58,66,0.80)] text-center font-['Inter-Regular',_sans-serif] text-lg leading-[30px] font-normal" style={{ letterSpacing: "0.02em" }}>
                    To kick off your MBA journey, here are some essential steps to take:
                </div>
            </div>

            {/* Accordion */}
            <div className='w-full lg"w-[50%] mx-auto mt-[40px]'>
                <Accordion defaultActiveKey={1} bordered>
                    <Accordion.Panel header="Payment of Important Fees" eventKey={1}>
                        <p>After you have been offered admission, visit the school portal to pay the
                        required fees like Acceptance Fee, Medical Fee, LACACA Fee and Library Fee.</p>
                    </Accordion.Panel>
                    <Accordion.Panel header="School fee payment" eventKey={2}>
                        <p>The school fee payment can be made in two (2) installments of 70% and 30%. 
                        </p>
                    </Accordion.Panel>
                    <Accordion.Panel header="Activate Your LASU Student Portal" eventKey={3}>
                        <p>In order to access essential resources and information through the portal activate your LASU student portal and ensure you complete your course registration as soon as possible.
                        </p>
                    </Accordion.Panel>
                    <Accordion.Panel header="Join Class WhatsApp Groups" eventKey={4}>
                        <p>To stay updated on important announcements, connect with your fellow course mate via WhatsApp and join all groups.
                        </p>
                    </Accordion.Panel>
                    <Accordion.Panel header="Familiarize yourself with the campus to make your transition smoother" eventKey={5}>
                        <p>Class Venues: Know where your classes will take place. -  Faculty Office: Find out where to meet your professors. -  Library: Discover the resources available for your studies. -  Cool Spots: Check out popular locations to relax or grab a bite. 
                        </p>
                    </Accordion.Panel>
                </Accordion>
            </div>
  
        </div>
    </div>
    </>
  )
}

export default ImportantSteps