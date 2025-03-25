import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, sizePrices }) => {
    const { currency } = useContext(ShopContext)

    // Extract the first available price from sizePrices
    const firstPrice = sizePrices ? Object.values(sizePrices)[0] : null

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Link onClick={handleClick} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='over-flow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>
                {firstPrice !== null ? `${currency}${Object.values(sizePrices)[0]}` : "Price not available"}
            </p>
        </Link>
    )
}

export default ProductItem
