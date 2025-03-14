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
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolution Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione commodi doloremque beatae, minima ipsam sunt rem aut eum? Tempora, pariatur consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consequuntur? Quo quia sed iure. Quaerat ullam accusantium dolores eveniet deleniti distinctio harum voluptatem? Soluta magnam possimus quisquam eveniet fugiat perferendis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea accusantium quia iusto! Ex iure, nesciunt praesentium non atque fugiat vitae sequi eos tempore voluptatibus. Ratione consequatur sequi quidem minus!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non facilis provident nesciunt nam nostrum consequuntur inventore repellendus alias optio impedit, reiciendis voluptatum, ipsum quisquam? Vel quis ad doloremque amet aliquid!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non facilis provident nesciunt nam nostrum consequuntur inventore repellendus alias optio impedit, reiciendis voluptatum, ipsum quisquam? Vel quis ad doloremque amet aliquid!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non facilis provident nesciunt nam nostrum consequuntur inventore repellendus alias optio impedit, reiciendis voluptatum, ipsum quisquam? Vel quis ad doloremque amet aliquid!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About