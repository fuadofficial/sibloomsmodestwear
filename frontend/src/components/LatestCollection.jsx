import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts([...products].reverse().slice(0, 10));
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore Our Latest Collections: Elegant Islamic Prayer Dresses & Musallas</p>
            </div>
            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} sizePrices={item.sizePrices} />
                    ))
                }
            </div>
            <div className="flex items-center justify-center mt-10">
                <Link to={'/collection'} className='bg-black w-[70%] tracking-wider rounded-md text-center text-white py-3 px-10 hover:bg-gray-800 cursor-pointer'>
                    More collections
                </Link>
            </div>
        </div>
    )
}

export default LatestCollection