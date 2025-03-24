import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-21 text-sm'>
                <div>
                    <img className='mb-5 w-44' src={assets.name} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Where tradition meets elegance. We offer high-quality Islamic prayer dresses designed for comfort and modesty. Enjoy secure shopping, fast delivery, and dedicated customer support. Stay updated with our latest collections and offers by following us on social media. Your satisfaction is our priority. Shop with confidence!                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>Aobut us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 8592863030</li>
                        <a>sibloomsmodestwear@gamil.com</a>
                        <a className='flex gap-3 mt-2' href="https://www.instagram.com/siblooms_modestwear/?__pwa=1" target="_blank" rel="noopener noreferrer">
                            <img src={assets.insta} alt="Instagram" className="w-7 h-7" />
                            <i>Instagram</i>
                        </a>
                        <a className='flex gap-3 mt-4 text-center' href="https://wa.me/918592863030?text=Hello%20there,%20I%20need%20help!" target="_blank" rel="noopener noreferrer">
                            <img src={assets.whadsapp} alt="whadsapp" className="w-9 h-9" />
                            <i className='mt-1.5'>Whadsapp</i>
                        </a>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ https://silbooms.vercel.app -All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer