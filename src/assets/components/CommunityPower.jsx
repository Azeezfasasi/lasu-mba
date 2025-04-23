import React from 'react'
import lasu from '../images/lasu.jpg';

function CommunityPower() {
  return (
    <>
    <div id='community' className="mt-[50px] border border-solid border-gray-200 pt-10">
        <div className="text-[#303a42] text-center font-['Poppins-Bold',_sans-serif] text-[28px] font-bold">
            The Power of Community and Collaboration
        </div>
        <div className='w-[95%] flex flex-col lg:flex-row items-center justify-start gap-8 mx-auto mt-[20px] mb-[50px]'>
            <div className='w-full lg:w-[50%]'>
                <img
                    className="w-full rounded-md"
                    src={lasu}
                />
            </div>
            <div>
                <div className="w-full lg:w-[647px]">
                    <div className="text-[#303a42] text-left font-['Inter-Regular',_sans-serif] text-xl leading-[35px] font-normal w-full lg:w-[647px]">
                    At LASU MBA, we believe that community and collaboration are the keys to
                    success. By working together, sharing ideas, and supporting one another,
                    we can achieve great things. Our community is built on the principles of
                    mutual respect, trust and a shared passion for excellence.
                    <br />
                    As Morad always says, "Leadership starts with service. "We're committed to
                    creating an environment where you can grow, learn, and thrive. Whether
                    you're looking for academic support, career guidance, or simply a friendly
                    ear, we're here for you.
                    <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommunityPower