import React from 'react'
import './info.css'
function Info({title,para}) {
  return (
    <div className='mx-10'>
        <h1  className='text-2xl mb-4 font-bold line-after'>{title}</h1>
        <p className='text-base'>{para}</p>
    </div>
  )
}

export default Info