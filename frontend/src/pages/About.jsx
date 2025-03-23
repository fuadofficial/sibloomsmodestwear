import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
   return (
      <div>
         <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={"ABOUT"} text2={"US"} />
         </div>
         <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p>We started our business two years ago with a commitment to providing high-quality Islamic prayer dresses. Our products are certified, ensuring comfort, modesty, and elegance for every customer.</p>
               <p>We proudly provide jobs for 3 to 5 employees, working fully from home. Our dedication to quality and service continues to grow.</p>
               <b className='text-gray-800'>Our Mission</b>
               <p>Our mission is to provide high-quality, certified Islamic prayer dresses that blend comfort, modesty, and elegance. We are committed to ethical practices, supporting home-based employment, and ensuring customer satisfaction through excellent craftsmanship, secure shopping, and reliable service. Our goal is to make modest fashion accessible to everyone.</p>
            </div>
         </div>
         <div className='text-xl py-4'>
            <Title text1={"WHY"} text2={'CHOOSE US'} />
         </div>
         <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Quality Assurance:</b>
               <p className='text-gray-600'>Our certified prayer dresses ensure comfort, durability, and modesty. Made from high-quality fabrics, they are designed for long-lasting wear, elegant style, and ultimate ease, perfect for daily prayers and special occasions.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Convenience:</b>
               <p className='text-gray-600'>Enjoy secure shopping, fast delivery, and a hassle-free experience. Our user-friendly website offers a seamless browsing and checkout process, while multiple payment options and efficient shipping ensure a smooth and stress-free purchase.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Exceptional Customer Service:</b>
               <p className='text-gray-600'>We prioritize customer satisfaction with responsive support and reliable service. Our dedicated team is always ready to assist with inquiries, order tracking, and after-sales support to ensure a delightful shopping experience.</p>
            </div>
         </div>
         {/* <NewsletterBox /> */}
      </div>
   )
}

export default About