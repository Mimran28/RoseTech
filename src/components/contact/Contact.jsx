import React from 'react'
import FormApp from '../form/Form'
import { FaLocationPin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Footer from '../footer/Footer';
function Contact() {
  const centerClass= 'flex items-center gap-3'
  return (
    <div>
      <div className='w-full p-5' style={{backgroundColor:'#9b0f29'}}>
        <h1 className='text-3xl font-bold text-white'>Contact Us</h1>
      </div>
      <div className='flex gap-12 w-full justify-between flex-wrap'>
        <div className='flex-1 w-full'>
          <h1 className=' font-bold text-2xl py-7 px-7'>Get inTouch</h1>
          <FormApp/>
        </div>
        <div className='flex-1 flex gap-8 flex-col'>
          <h1 className=' font-bold text-2xl py-7 px-7'>Contact Info</h1>
          <div className={centerClass}>
          <FaLocationPin className='text-3xl'style={{color:'#9b0f29'}}/>
          <p style={{maxWidth:'80%'}}>Rose Tech Campus, White Rose Grammar School, Mir Muhammad Balauch Road, Near Baghdadi Police Station, Karachi, Sindh, Pakistan - 75400</p>
          </div>
          <div className={centerClass}>
            <IoCall  className='text-3xl' style={{color:'#9b0f29'}}/>
          <p>+92 310 2310553</p>
           </div>
          <div className={centerClass}>
            <MdEmail  className='text-3xl' style={{color:'#9b0f29'}}/>
          <p>rosetechlyari@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='h-auto mb-10'>
      <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height={600} id="gmap_canvas" src="https://maps.google.com/maps?q=Rose++Tech+&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/></div></div>
      </div>
      <Footer/>
    </div>
  )
}
export default Contact