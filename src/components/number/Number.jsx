import React,{useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function Number({children,amount,custom,txt,sign}) {
  const [counterOn,setCounterOn] =useState(false)
  return (
    <div className={`${custom} flex flex-col items-center justify-around`}>
       {children}
       <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>{counterOn && <><h1 className='text-2xl font-bold'><CountUp start={0} end={amount} delay={0} duration={2}> </CountUp>{sign}</h1></>}</ScrollTrigger>
       
        <h1 className='text-stone-500'>{txt}</h1>
    </div>
  )
}

export default Number