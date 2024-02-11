import React from 'react'

function Members({desig,src,name,facebook,insta,linkedin,github}){
  return (
    <div className='w-1/5 flex flex-col gap-5 p-5 rounded' style={{backgroundColor:'#edf2f7'}}>
        <img className='w-full h-52' src={src}/>
       <div className='text-center'>
        <h1 className='text-xl font-bold my-1'>{name}</h1>
        <h1>{desig}</h1>
       </div>
        <div className='flex items-center justify-center gap-4'>
  {facebook&&facebook}
  {insta && insta}
  {linkedin && linkedin}
  {github && github}
        </div>
    </div>
  )
}

export default Members