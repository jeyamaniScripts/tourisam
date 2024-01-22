import React from 'react'
import nopage from "../assets/photos/404.png"

const NoPages = () => {
  return (
    <div>
      <img src={nopage} alt="" className='w-full object-cover h-[700px]' />
    </div>
  )
}

export default NoPages