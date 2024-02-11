import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  const [activeTab,setActiveTab] = useState('Home')
  return (
<div>

   <div className='flex justify-start shadow-xl p-2 bg-slate-100 z-50 w-full'>
        <img className='h-16 object-contain w-25' src="/logo.png"/>
        <ul className='flex items-center ml-36 flex-1 gap-8 '>
            <li className={activeTab === 'Home'? 'after active':'after'} onClick={()=>setActiveTab('Home')}><Link to={'/'}>Home</Link></li>
            <li className={activeTab === 'Courses'? 'after active':'after'} onClick={()=>setActiveTab('Courses')}><Link to={'/courses'}>Courses</Link></li>
            <li className={activeTab === 'Events'? 'after active':'after'} onClick={()=>setActiveTab('Events')}><Link to={'/events'}>Events</Link></li>
            <li className={activeTab === 'About'? 'after active':'after'} onClick={()=>setActiveTab('About')}><Link to={'/about'}>About</Link></li>
            <li className={activeTab === 'Contact'? 'after active':'after'} onClick={()=>setActiveTab('Contact')}><Link to={'/contact'}>Contact us</Link></li>
        </ul>
    </div>
   </ div>
  )
}

export default Header