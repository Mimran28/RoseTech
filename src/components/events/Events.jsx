import React from 'react'
import EventCard from './EventCard'
import './event.css'
import Footer from '../footer/Footer'
import  eventsData  from '../eventsData'
function Events() {
  return (
    <div >
          <div className='w-full p-5' style={{backgroundColor:'#9b0f29'}}>
        <h1 className='text-3xl font-bold text-white '>Events</h1>
      </div>
      <h1 className='text-center my-6 font-bold text-xl aftern'>"Welcome to Rose Tech, where learning and excitement come together! Explore our Events page for a glimpse into the dynamic world of technology education. As a top Computer Institute in Lyari, Karachi, we're passionate about providing excellent learning experiences. Join us for diverse events showcasing our commitment to tech education!"</h1>
      <div className='mt-20 my-60 w-full flex flex-wrap justify-center gap-20'>
       {eventsData.map(val=>{
        return(
          <EventCard 
          title={val.title}
          text={val.description}
          date ={val.date}
          image={val.imageurl}
          />
        )
       })}
        
      </div>
      <Footer/>
    </div>
  )
}

export default Events