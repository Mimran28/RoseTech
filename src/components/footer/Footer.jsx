import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


function Footer() {
const classesHeading= `text-lg font-bold`
const para = `text-sm mt-2`
  return (
    <div className=' h-56 bg-black'>
<div className=' px-5 pt-10 text-white flex gap-5 justify-center items-start'>
<div className='w-1/5'>
    <h1  className={classesHeading}>Rose Tech Computer Institute</h1>
    <p className={para}>Start Learning from IT Experts and make your Career in IT or Marketing Industry!</p>
</div>
<div className='w-1/4 text-center'>
    <h1 className={classesHeading}>Contact Info</h1>
    <p className={para}>+92 310 2310553</p>
</div>
<div className='w-1/4 text-center'>
    <h1 className={classesHeading}>Social Links</h1>
    <div className='flex gap-5 justify-center items-center mt-2'>
    <IoLogoFacebook />
    <IoLogoWhatsapp />
    <FaYoutube />
    <FaTiktok />
    </div>
</div>
<div className='w-1/4'>
    <h1 className={classesHeading}>Address</h1>
    <p className={para}>White Rose Grammer School, Mir Muhammad Balauch Road Near Baghdadi Police Station Karachi, Sindh, Pakistan-75400</p>
</div>
    </div>
</div>
  )
}

export default Footer