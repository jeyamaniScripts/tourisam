import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const ResponsiveMenu = ({showMenu,nav}) => {
  
  return (
    <div className={`${showMenu ? '*left-9999':'left-0'} absolute top-0 left-0 bottom-0 h-screen w-[75%] bg-white rounded-r-lg z-20`}>
     <div className='flex flex-col justify-stretch container p-14'>
        <div className=' flex flex-col items-center gap-3'>
            <FaUserCircle className='w-12 h-11'/>
            <div>
                <p>Hello! jeyamani</p>
            </div>
        </div>
        <div className=''>
            <ul className='flex flex-col items-start gap-3'>
                {nav.NavLinks.map((list,i)=>(
                    <li key={i} >
                        <NavLink to={list.link}> {list.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
        <div className=''>
          created  @jeyamani 2024
        </div>
     </div>
    </div>
  )
}

export default ResponsiveMenu