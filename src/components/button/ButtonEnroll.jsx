import React from 'react'

function ButtonEnroll({Zclass ,text}) {
  return (
    <div className={`px-5 py-3 mt-5 mb-2 cursor-pointer hover:opacity-95 rounded-md font-bold text-center text-white ${Zclass}`} style={{backgroundColor:'#9b0f29'}}>
        <p>{text}</p>
    </div>
  )
}

export default ButtonEnroll;