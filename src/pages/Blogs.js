import React from 'react'
import {content } from '../content'
import BlogsCard from '../components/Blogs/BlogsCard';

const Blogs = () => {
  const{ blogs} = content;
  return (
    <div className='py-14'>
      <div className='container'>
        <h2 className='border-l-8 border-primaryColor/50 py-2 pl-3'>Our Latest Places</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
          {
            blogs.BlogsData.map((list,i)=>(
              <BlogsCard key={i} items={list}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs