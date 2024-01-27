import React, { useState } from 'react'
import {content} from '../../content'
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
// import ResponsiveMenu from './ResponsiveMenu';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const Navbar = () => {
  //let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
   
  }
  function closeModal() {
    setIsOpen(false);
  }
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
          <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className=''>
        <FaTimes className='absolute top-2 right-10' onClick={closeModal}/>
        <h2>Book Your Trip</h2>
        <form action="" className='flex flex-col space-y-6 mt-5'>
          <input type="text" placeholder='Name'className=' outline-none border-b-2 border-slate-300 p-1'/>
          <input type="email" placeholder='Email' className=' outline-none border-b-2 border-slate-300 p-1'/>
          <input type="text" placeholder='Number' className=' outline-none border-b-2 border-slate-300 p-1'/>
          <button className='btn'>Book Now</button>
        </form>
      </div>
       </Modal>
           <button className='btn' onClick={openModal}>{nav.btnText}</button>
           <div onClick={handleMenu} className='md:hidden'>
           {showMenu? <FaBars/>:
            <FaTimes/>}
           </div>
          </div>  
        </div>  
        </div>  
         {/* <ResponsiveMenu showMenu={showMenu} nav={nav}/> */}
      </div>   
    </>
  )
}

export default Navbar