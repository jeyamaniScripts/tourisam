import React, { useState } from 'react'
import {content} from '../../content'
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const { nav} =content;
  const [showMenu,setShowMenu]=useState(true)

  const handleMenu=()=>{
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className=' shadow-lg bg-white'>
        <div className=' bg-color py-1 sm:block hidden'>
          <div className='container'>
            <div className='flex justify-between'>
              <p>{nav.offer.off1}</p>
              <p>{nav.offer.off2}</p>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='flex justify-between items-center'>
          <div>
            <img src={nav.logo} alt="logo"  className='w-14'/>
          </div>
          <div className='hidden md:block'>
            <ul className='flex gap-6'>
              {nav.NavLinks.map((list,i)=>(
                <li key={i} activeclassname="active">
                  <NavLink to={list.link}>{list.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex gap-5 items-center'>
           <button className='btn'>{nav.btnText}</button>
           <div onClick={handleMenu} className='md:hidden'>
           {showMenu? <FaBars/>:
            <FaTimes/>}
           </div>
          </div>  
        </div>  
        </div>  
        <ResponsiveMenu showMenu={showMenu} nav={nav}/>
      </div>   
    </>
  )
}

export default Navbar