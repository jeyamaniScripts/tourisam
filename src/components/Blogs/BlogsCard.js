import React from 'react'
import {Link} from "react-router-dom"
const BlogsCard = ({items}) => {
  return (
   <Link to={`/blogs/${items.title}`}>
       <div className='shadow-lg'>
        <div className=' overflow-hidden'>
            <img src={items.image} alt="" className='h-[220px] mx-auto w-full object-cover hover:skew-x-2 hover:scale-110' />
        </div>
        <div className='p-4  space-y-2'>
            <h2>{items.title}</h2>
            <p className=' line-clamp-2 '>{items.description}</p>
            <div className=' border-t-2 px-2 flex justify-between items-center'>
                    <p>by {items.author}</p>
                    <p>{items.date}</p>
            </div>
        </div>
    </div>   
   </Link>
  )
}

export default BlogsCard