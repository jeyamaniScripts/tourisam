import React from 'react'
import bannerImg from '../../assets/photos/passport.jpg'
const BannerImg = () => {
  return (
    <div className=''>
       <img src={bannerImg} alt=""  className='w-full h-[400px] object-cover'/>
    </div>
  )
}

export default BannerImg