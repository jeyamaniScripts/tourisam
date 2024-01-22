import React from 'react'
import { content } from '../content'


const About = () => {
  
  const {about} =content;
  return (
    <div className=' bg-primaryColor/20'>
      <div className=' container py-14'>
          <div className='flex flex-col items-center gap-5'>
            <h2 >why chooose us?</h2>
            <p>LonelyEscapes offers hundred's of tours and activities for travellers around the globe.</p>
          </div>
          
          <div className='mt-5'>
            {about.map((list,i)=>(
              <div className='space-y-3 flex flex-col items-center' key={i}>
                
                <div className='mt-5'>{list.icon}</div>
                <h4 className='text-center'>{list.title}</h4>
                <p>{list.info}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default About