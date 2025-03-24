import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {
   const { backendUrl, token, currency, navigate } = useContext(ShopContext)
   const [orderData, setOrderData] = useState([])

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const loadOrderData = async () => {
      try {
         if (!token) return;

         const response = await axios.post(backendUrl + "/api/order/userorders", {}, { headers: { token } })
         if (response.data.success) {
            let allOrdersItem = []
            response.data.orders.forEach((order) => {
               order.items.forEach((item) => {
                  allOrdersItem.push({
                     ...item,
                     status: order.status,
                     payment: order.payment,
                     paymentMethod: order.paymentMethod,
                     date: order.date,
                     price: item.sizePrices?.[item.size] || "N/A"
                  })
               })
            })
            setOrderData(allOrdersItem.reverse())
         } else {
            console.error("Failed to fetch orders:", response.data.message)
         }
      } catch (error) {
         console.error("Error loading orders:", error)
      }
   }

   useEffect(() => {
      loadOrderData()
   }, [token])

   return (
      <div className='border-t pt-16'>
         <div className='text-2xl'>
            <Title text1={"MY"} text2={"ORDERS"} />
            <div className=''>
               {
                  orderData.length === 0 ? (
                     <div className="flex flex-col items-center gap-4 py-10">
                        <p className="text-gray-600 text-lg">You have no orders yet.</p>
                        <button
                           onClick={() => navigate('/collection')}
                           className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                        >
                           Shop Now
                        </button>
                     </div>
                  ) :
                     orderData.map((item, index) => (
                        <div className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' key={index}>
                           <div className='flex items-start gap-6 text-sm'>
                              <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                              <div>
                                 <p className='sm:text-base font-medium'>{item.name}</p>
                                 <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                                    <p>{currency} {item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Size: {item.size}</p>
                                 </div>
                                 <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                                 <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                              </div>
                           </div>
                           <div className='md:w-1/2 flex justify-between'>
                              <div className='flex items-center gap-2'>
                                 <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                 <p className='text-sm md:text-base'>{item.status}</p>
                              </div>
                              <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                           </div>
                        </div>
                     ))
               }
            </div>
         </div>
      </div>
   )
}

export default Orders;
