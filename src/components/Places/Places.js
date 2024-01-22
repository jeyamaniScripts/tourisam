import React from 'react'
import { content } from '../../content'
import PlacesCard from './PlacesCard';

const Places = () => {
  const {places}=content;
  return (
    
    <div className=' bg-gray-50 py-14'>
      <div className='container'>
        <div className=' border-l-8 border-primaryColor pl-4 py-2 mb-8'>
          <h2> Best Places</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
         {places.PlacesData.map((list,i)=>(
            <PlacesCard key={i} list={list}/>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Places