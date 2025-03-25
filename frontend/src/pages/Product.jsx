import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
    const { productId } = useParams()
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(null)
    const [image, setImage] = useState("")
    const [size, setSize] = useState("")
    const [price, setPrice] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchProductData = () => {
            const foundProduct = products.find((item) => item._id === productId)
            if (foundProduct) {
                setProductData(foundProduct)
                setImage(foundProduct.image[0])

                // Set default size to "S" if available, otherwise fallback to the first size
                const defaultSize = foundProduct.sizes[0]
                setSize(defaultSize)
                setPrice(foundProduct.sizePrices[defaultSize])
            }
        }
        fetchProductData()
    }, [productId, products])

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize)
        setPrice(productData.sizePrices[selectedSize]) // Update price based on size
    }

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex gap-0.5 sm:flex-col flex-nowrap overflow-x-auto sm:overflow-hidden justify-start sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className='w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                alt=""
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>
                {/* --------------Product Info ----------- */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img className='w-3 5' src={assets.star_icon} alt="" />
                        <img className='w-3 5' src={assets.star_icon} alt="" />
                        <img className='w-3 5' src={assets.star_icon} alt="" />
                        <img className='w-3 5' src={assets.star_icon} alt="" />
                        <img className='w-3 5' src={assets.star_dull_icon} alt="" />
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => handleSizeChange(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500 " : ""}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <strong>Small sizes for age 8 to 11,</strong>
                        <strong>Medium sizes for age 12 to 20,</strong>
                        <strong>Large sizes for age 20 to above</strong>
                        <p className='mt-3'>100% Original Product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/* ----------------Description & Review Section------------------ */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border-0 border-t border-l border-r px-5 py-1 text-sm'>Description</b>
                    <p className='border-0 border-t border-r px-5 py-1 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>This product offers premium quality, comfort, and durability, perfect for all occasions. Designed for a perfect fit, it ensures style and convenience</p>
                    <p>Customers love its exceptional quality, perfect sizing, and stylish design. Highly rated for comfort and durability, making it a favorite choice for many.</p>
                </div>
            </div>
            {/* ......................Display related products.................... */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : (
        <div className='opacity-0'></div>
    )
}

export default Product
