import React, { useEffect } from 'react'
import AppCarousel from '../Carousal'
import './home.css'
import { IoBookSharp } from "react-icons/io5";
import { BiSolidBriefcase } from "react-icons/bi";
import Leading from '../leading/Leading';
import { FaDesktop } from "react-icons/fa6";
import {motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Info from '../info/Info';
import { FaUserGraduate } from "react-icons/fa";
import Number from '../number/Number';
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import Footer from '../footer/Footer';



function Home() {
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
    <>
  
  <div
 
     className=' relative car-container'>
      <AppCarousel/>
      <motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }} className='absolute left-3  bottom-14 text-center h-fit z-10'>
      <h1 className=' text-white text-xl'>Leading and professional Computer institute</h1>
      <h1 className=' text-white font-bold text-4xl'>Get Enrolled and Gain Excellence</h1>
     <button className='btn py-2 px-5 mt-5 rounded-sm font-bold  text-white' >Enroll Now</button>
      </motion.div>
 
    </div>
    
    <div className='box mb-20 '>
    <h1 className='text-center text-4xl font-bold my-20 afterc drop-shadow-xl'>OUR LEADING COURSES</h1>
   <div className='w-full flex flex-wrap justify-around'>
    <Leading text={'Master the art of building responsive and dynamic websites with our comprehensive Web Development course. Learn HTML, CSS, JavaScript, and more.'} title={"Web Designing"}><FaDesktop className='icon my-10'/></Leading>
    <Leading text={'Explore the world of Web Designing and master the skills to create visually appealing and user-friendly websites. Learn HTML, CSS, and responsive design.'} title={"Web Development"}><FaDesktop className='icon my-10'/></Leading>
    <Leading text={'Enhance your productivity with our MS Office course. Learn essential skills in Word, Excel, PowerPoint, and more for professional documentation and presentations.'} title={"MS Office"}><FaDesktop className='icon my-10'/></Leading>
   </div>
  </div>
  <motion.div
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control} className='box my-16 '>
      <h1 className='text-center text-4xl font-bold mb-8 '>About us</h1>
      <p className='text-center px-40 text-xl leading-8'>Welcome to <b>Rose Tech</b>, a leading institution dedicated to fostering excellence in computer education. Established with a vision to empower individuals with cutting-edge skills and knowledge in the rapidly evolving world of technology, we take pride in providing quality education and hands-on training.our main goal is to provide our students professional training with digital techniques to make them ready to work with companies.We Rose Tech have qualified trainers; our main goal is to provide our students professional training with digital techniques to make them ready to work with companies, right from day one. We are in the coordination of most of the well-known organizations that feel honored to give our students a chance for their internship and jobs, Alhamdulillah! And lots of our students had made their positions by proving their specialties in Web Development, Graphics Designing, Digital Marketing, SEO and Social Media Marketing.</p>
    </motion.div>
    <div className='choose-us flex h-fit '>
     <div  className=' flex-1 pb-5 flex flex-col h-full justify-start text-white' style={{backgroundImage: 'url("https://lh3.googleusercontent.com/pw/ABLVV85iAtcX4FzdF7fUHXR_zivxuX6PWRU4J3_VJIfHYxEXVhLYkNPJcqxgr7yYG9ORpMAKBtgCpGIOwD18tYcOuu_ydTVw2chF0cQf7Uh91Sbdhy5ati2sIC7otUoaCwicgHOI6nGBj-EX6UT670enQe7G=w1269-h897-s-no-gm?authuser=0")'}}>
      <h1 className='py-4 text-center text-4xl font-bold' >Why Choose Us</h1>
      <div className='flex items-center px-5 mt-3'>
      <IoBookSharp style={{height:'60px',width:'160px'}}/>
      <p className='text-lg px-10'><b>
SKILL DEVELOPMENT TRAINING PROGRAMS:</b><br/>
<p className='text-sm'>Our Skill development Training programs are designed according to need of job market. These programs are supervised and taught by highly industry experienced professionals.</p>
<br/>
</p>
     </div>
     <div className='flex items-center px-5 my-5'>
     <BiSolidBriefcase style={{height:'60px',width:'160px'}}/>
      <p className='text-lg px-10'><b>
INTERNSHIPS</b><br/>
<p className='text-sm'>We have sound internship model in our training programs that gives you an opportunity to work with professionals on live industry projects. It helps you to build your own projects, applications and personal portfolio.
<br/></p>
</p>
     </div>
     <div className='flex items-center px-5'>
     <BiSolidBriefcase style={{height:'60px',width:'160px'}}/>
      <p className='text-lg px-10'><b>
PLACEMENT OPPORTUNITIES</b><br/>
<p className='text-sm'>Our professional team provides you job assistance with their reference in the corporate sector. We are also willing to invite different recruitment firms to conduct interviews form our students and pick them if they meet their eligibility criteria.
<br/></p>
</p>
     </div>
     </div>
     <div className='flex-1'>
      <img className='w-full h-full object-cover' src="https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=0&k=20&c=kFR__hBLIM-0PW6k4lSqAQJGo-ukLu-bbsOQk_V6edA="/>
     </div>
    </div>
  
  <div className='flex mt-24'>
  <Info title={'WHY ROSE TECH ?'} para={'Students at Rose Tech Lyari benefit from quality IT education, tailored to market demands and individual interests. Empowering underprivileged youth, the initiative cultivates a new generation of software developers, contributing to community development. With supportive environments in computer labs and online platforms showcasing success stories, Rose Tech inspires positive change.'}/>
  <Info title={`WHY OUR COMPUTER INSTITUTE IS BEST ?`} para={'Rose Tech stands out in Lyari due to our commitment to quality education, a tailored curriculum, and community empowerment. We focus on IT skills aligned with market demands and student interests, creating a supportive environment in our computer labs. Our dedication to showcasing success stories further distinguishes us, inspiring positive change in the community.'}/>
  </div>
  <div className='h-72 mt-24 flex flex-wrap gap-6 justify-center'>
   <Number custom={'h-40 py-4 border rounded-lg shadow-md border-solid border-gray-200 w-72'} amount={1000} txt={'STUDENTS'}><FaUserGraduate className='text-5xl' style={{color:'#9b0f29'}}/></Number>
   <Number custom={'h-40 py-4 border rounded-lg shadow-md border-solid border-gray-200 w-72'}  amount={2200} sign={"+"} txt={'FOLLOWERS'}><FaUser className='text-5xl' style={{color:'#9b0f29'}}/></Number>
   <Number custom={'h-40 py-4 border rounded-lg shadow-md border-solid border-gray-200 w-72'} amount={100} txt={'REVIEWS'}> <FaComments  className='text-5xl' style={{color:'#9b0f29'}}/></Number>
   <Number custom={'h-40 py-4 border rounded-lg shadow-md border-solid border-gray-200 w-72'} amount={1000} txt={'CERTIFIED STUDENTS'}><FaCertificate  className='text-5xl' style={{color:'#9b0f29'}}/></Number>

  </div>
  <Footer/>
    </>
  )
}

export default Home