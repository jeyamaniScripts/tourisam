import React from 'react'
import { FaMapMarkerAlt} from 'react-icons/fa'

const PlacesCard = ({list}) => {
  return (
    <div className=' shadow-lg hover:shadow-lg duration-500'>
     <div className=' overflow-hidden'>
        <img src={list.img} alt=""  className='mx-auto h-[220px] w-full object-cover transition duration-200 hover:skew-x-2 hover:scale-110'/>
     </div>
     <div className='p-5 space-y-2'>
        <h2 className=' line-clamp-1'>{list.title}</h2>
        <div className='flex items-center  gap-2'>
            <FaMapMarkerAlt/>
            <p>{list.location}</p>
        </div>
        
            <p className=' line-clamp-2'>{list.description}</p>
        <div className='border-t-2 flex justify-between'>
          <div className=''>
            <p>{list.type}</p>
          </div>
          <div>
            <p>$ {list.price}</p>
          </div>
        </div>
     </div>
    </div>
  )
}

export default PlacesCard