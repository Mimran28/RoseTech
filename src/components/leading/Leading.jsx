import React from 'react'
import './leading.css'
import  ButtonEnroll from '../button/ButtonEnroll'
import {motion} from 'framer-motion'


function Leading({children,text,title}) {
  return (
    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
  >
        <div className=' rounded-md flex flex-col px-5 justify-around items-center shadow-xl hover:shadow-2xl' style={{backgroundColor:'#f0ffff',width:'350px',height:'400px'}}>
      <div className='mt-5'> 
         {children}
        </div>
            <div className='flex flex-col justify-center items-center' style={{height:'197px'}}>
            <h1 className='text-xl mb-5 font-bold text-center'>{title}</h1>
            <p >{text}</p>
            </div>
            <ButtonEnroll Zclass="w-full" text={'Enroll Now'}/>
        </div>
    </motion.div>
  )
}

export default Leading