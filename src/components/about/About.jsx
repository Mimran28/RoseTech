import './about.css'
import React, { useEffect } from 'react'
import {motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate } from "react-icons/fa";
import Number from '../number/Number';
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import Footer from '../footer/Footer';
import Members from '../members/Members';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




function About() {
  const custom= 'w-1/2 mt-5'
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div >
      <div className='w-full p-5' style={{backgroundColor:'#9b0f29'}}>
        <h1 className='text-3xl font-bold text-white'>About Us</h1>
      </div>
      <div className='px-10 mb-48'>

      <div className='flex justify-between mt-20'>
   <div className='w-1/2'>
        <h1 className='text-xl font-bold pt-10' style={{color: '#9b0f29'}}>How It Started</h1>
        <h1 className='txt leading-snug  font-bold '>Our Dream Is Global Learning Transformation</h1>
   </div>
  
        <img className='h-96 w-26 rounded-lg' src='/pic1.jpg'/>
      </div>
      <div className='flex justify-between mt-20'>
    <p className='w-1/2 leading-8 px-4'>Rose Tech is a leading computer institute located in Lyari, Karachi. Since 2019, we have been dedicated to providing high-quality education in various IT fields, including web development, graphic design, video editing, MIT, and more.

At Rose Tech, we are committed to excellence in tech education. Our specialized programs, hands-on labs, and supportive learning community create an ideal environment for students to thrive and succeed in their careers.</p>
 
 <div className='flex justi`fy-between flex-wrap w-1/2'>
 <Number custom={custom} amount={'1000'} txt={'STUDENTS'}><FaUserGraduate className='text-5xl' style={{color:'#9b0f29'}}/></Number>
   <Number custom={custom}  amount={2200} sign={"+"} txt={'FOLLOWERS'}><FaUser className='text-5xl' style={{color:'#9b0f29'}}/></Number>
   <Number custom={custom} amount={100} txt={'REVIEWS'}> <FaComments  className='text-5xl' style={{color:'#9b0f29'}}/></Number>
   <Number custom={custom}  amount={1000} txt={'CERTIFIED STUDENTS'}><FaCertificate  className='text-5xl' style={{color:'#9b0f29'}}/></Number>

 </div>
   </div>
   <div className='my-40 text-center flex flex-col gap-4 px-32'>
    <h1 className='text-5xl' style={{color:'#9b0f29'}}>OUR MISSION</h1>
    <h1  className='text-3xl font-bold'>Empowering Lives Through Tech Education</h1>
    <p>We are on a mission to empower individuals with quality education and practical skills in the field of technology. Our goal is to foster a community of lifelong learners and professionals who contribute meaningfully to the ever-evolving digital landscape.</p>
   </div>
   <div className='my-40 text-center flex flex-col gap-4 px-32'>
    <h1 className='text-5xl ' style={{color:'#9b0f29'}}>OUR VISION</h1>
    <h1  className='text-3xl font-bold'>Leading the Way in Technology Education</h1>
    <p>Our vision is to be a leading institute recognized for excellence in technology education. We aim to produce highly skilled and innovative professionals who drive positive change in the global technological ecosystem.</p>
   </div>
   <div> 
    <h1 className='text-5xl mb-10 relative afterg text-center'>OUR TEAM</h1>
   <div className='flex flex-wrap items-center justify-center gap-10'>
    <Members 
    name={'Anwar Ali Bhatti'}
    desig ={'Director'}
    src={'/male.png'}
    facebook={<FaFacebook size={20} style={{color:'#9b0f29'}}/>} 
    insta={ <FaSquareInstagram size={20} style={{color:'#9b0f29'}}/>}
    github={<FaGithub size={20} style={{color:'#9b0f29'}}/>}
    linkedin={<FaLinkedin size={20} style={{color:'#9b0f29'}}/>}
    />
    <Members 
    name={'Najma Jabeen'}
    desig ={'Administrator'}
    src={'/female.png'}
    facebook={<FaFacebook size={20} style={{color:'#9b0f29'}}/>} 
    insta={ <FaSquareInstagram size={20} style={{color:'#9b0f29'}}/>}
    github={<FaGithub size={20} style={{color:'#9b0f29'}}/>}
    linkedin={<FaLinkedin size={20} style={{color:'#9b0f29'}}/>}
    />
    <Members 
    name={'Umair Farooq'}
    desig ={'Program Director'}
    src={'/male.png'}
    facebook={<FaFacebook size={20} style={{color:'#9b0f29'}}/>} 
    insta={ <FaSquareInstagram size={20} style={{color:'#9b0f29'}}/>}
    github={<FaGithub size={20} style={{color:'#9b0f29'}}/>}
    linkedin={<FaLinkedin size={20} style={{color:'#9b0f29'}}/>}
    />
     <Members 
    name={'Rafay Memon'}
    desig ={'Team Lead'}
    src={'/male.png'}
    facebook={<FaFacebook size={20} style={{color:'#9b0f29'}}/>} 
    insta={ <FaSquareInstagram size={20} style={{color:'#9b0f29'}}/>}
    github={<FaGithub size={20} style={{color:'#9b0f29'}}/>}
    linkedin={<FaLinkedin size={20} style={{color:'#9b0f29'}}/>}
    />
        <Members 
    name={'Fardeen Ahmed'}
    desig ={'Fardeen Ahmed'}
    src={'/male.png'}
    facebook={<FaFacebook size={20} style={{color:'#9b0f29'}}/>} 
    insta={ <FaSquareInstagram size={20} style={{color:'#9b0f29'}}/>}
    github={<FaGithub size={20} style={{color:'#9b0f29'}}/>}
    linkedin={<FaLinkedin size={20} style={{color:'#9b0f29'}}/>}
    />
    </div>
   </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About