import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)

    const location = useLocation()
    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center py-3'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm py-1'
                    type="text"
                    placeholder='Search...'
                    autoFocus
                />
                <img className='w-4 ml-2' src={assets.search_icon} alt="Search" />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className='inline w-4 cursor-pointer ml-2 hover:opacity-70 transition-opacity'
                src={assets.cross_icon}
                alt="Close"
            />
        </div>
    ) : null
}

export default SearchBar