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
               <p>SIBLOOMS started its journey two years ago with a mission to provide high-quality Islamic women’s prayer dresses and musallas. We proudly serve customers across three states, ensuring comfort, elegance, and modesty in every piece we offer.</p>
               <p>Operating from home, we are dedicated to empowering women by providing job opportunities to 3 to 5 women. Our commitment to quality and craftsmanship reflects in our handmade collections, designed with love and care.</p>
               <b className='text-gray-800'>Our Mission</b>
               <p>At SIBLOOMS, our mission is to provide high-quality Islamic women’s prayer dresses and musallas that blend comfort, elegance, and modesty. We strive to serve our customers with dedication while empowering women by creating home-based job opportunities. Our goal is to make prayer more special with beautifully crafted essentials.</p>
            </div>
         </div>
         <div className='text-xl py-4'>
            <Title text1={"WHY"} text2={'CHOOSE US'} />
         </div>
         <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Quality Assurance:</b>
               <p className='text-gray-600'>At SIBLOOMS, we prioritize premium fabrics and craftsmanship to ensure our prayer dresses and musallas are durable, comfortable, and elegant. Each piece is carefully designed for long-lasting quality.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Convenience:</b>
               <p className='text-gray-600'>We offer a seamless shopping experience, allowing you to browse and purchase from the comfort of your home. With reliable delivery across three states, we ensure your essentials reach you hassle-free.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Exceptional Customer Service:</b>
               <p className='text-gray-600'>Customer satisfaction is our priority. We are committed to providing personalized support, addressing your queries promptly, and ensuring a smooth and enjoyable shopping experience.</p>
            </div>
         </div>
         {/* <NewsletterBox /> */}
      </div>
   )
}

export default About