import React from 'react'
import ButtonEnroll from '../button/ButtonEnroll'

function EventCard({title,text,date,image}) {
  return (
    <div className='shadow-xl w-fit min-w-96 rounded md p-5 hover:shadow-2xl' style={{width:'39%'}}>
        <div className='flex flex-col justify-between items-center '>
            <div className='relative w-full'>
            <img className='w-full h-80 object-cover' src={image} alt="" />
            <div className='bg-white absolute top-2 left-2 rounded-md' style={{background:'rgba(255, 255, 255,0.7)'}}>
                <p className='text-center p-1 font-bold text-sm opacity-100'>Event Date: {date}</p>
            </div>
            </div>
            <div className=' flex flex-col justify-center items-center' style={{height:'360px'}}>
                <h1 className='text-xl font-bold pb-5'>{title}</h1>
                <p >{text}</p>
            </div>
            <ButtonEnroll text="Learn More" Zclass={'w-full'}/>
        </div>
    </div>
  )
}

export default EventCard