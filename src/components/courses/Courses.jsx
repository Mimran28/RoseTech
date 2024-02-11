import React from 'react'
import './courses.css'
import Leading from '../leading/Leading'
import { courseData } from '../courseData'
import Footer from '../footer/Footer'



function Courses() {

  return (
    <div>
      <div className='w-full p-5 shadow-lg py-7' style={{backgroundColor:'#9b0f29'}}>
        <h1 className='text-3xl font-bold text-white'>Courses</h1>
      </div>
   <h1 className='font-bold text-xl p-6 px-10 aftert'>Welcome to Valuable Students! Are you feeling uncertain about where to embark on your career journey or eager to enhance your IT skills and professionalism? Perhaps you're seeking reliable guidance, with the assurance that the computer course or field you choose will significantly boost your IT career. If that's the case, you've landed at the perfect destination.</h1>
    <div className='flex flex-wrap justify-around items-center py-20 px-6' >
      {
        courseData.map(val=>{
          const Icon = val.icon;
          return(
            <div className='mb-10'>
            <Leading title={val.title} text={val.text}><Icon size={60} style={{color:'#9b0f29'}}/></Leading>
           </div>
          )
        })
      }
    </div>
    <Footer/>
    </div>
  )
}

export default Courses