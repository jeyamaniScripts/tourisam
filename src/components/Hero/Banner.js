import React from 'react'

import back from '../../assets/photos/backg.webp'
import { FaHotel, FaPlane, FaUtensils, FaWifi } from 'react-icons/fa'
const Banner = () => {
  return (
    <div className=' bg-gray-100 py-14'>
       <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center px-auto items-center gap-6'>
            <div >
             <img src={back} alt="" className='max-w-[550px] h-[220px] object-cover'/>
            </div>
            <div className=' space-y-4'>
              <h1>Explore the All Corners Of the World!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div  className='grid-cols-1 md:grid-cols-2 items-center gap-4'>
                <div className='flex items-center gap-2'>
                <div className='bg-red-200 rounded-full p-4'>
                    <FaPlane className='  h-5 w-5  '/>
                   </div>
                    <p>Flight</p>
                </div>
                <div className='flex items-center gap-2 p-2'>
                <div className='bg-yellow-200 rounded-full p-4'>
                    <FaUtensils className='w-5 h-5'/>
                  </div>
                    <p>Food</p>
                </div>
                <div className='flex items-center gap-2'>
                   <div className='bg-green-200 rounded-full p-4'>
                    <FaWifi className='w-5 h-5'/>
                   </div>
                    <p>Wi-Fi</p>
                </div>
                <div className='flex items-center gap-2'>
                <div className=' bg-violet-200 rounded-full p-4'>
                    <FaHotel className='w-5 h-5'/>
                    </div>
                    <p>Hotels</p>
                </div>
              </div>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Banner