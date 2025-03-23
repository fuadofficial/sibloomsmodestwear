import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Alathurpadi <br />Malappuram, Kerala, India</p>
          <p className='text-gray-500'>Tel: 8592863030 <br /><a>sibloomsmodestwear@gamil.com</a></p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Siblooms</p>
          <p className='text-gray-500'>Join Siblooms and be part of a growing, home-based business. We provide jobs for 3 to 5 employees, ensuring a flexible and supportive work environment. Grow with us in the modest fashion industry.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      {/* <NewsletterBox /> */}
    </div>
  )
}

export default Contact