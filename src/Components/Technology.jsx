import React from 'react'

const Technology = (props) => {
  return (
    <div className='flex flex-col items-center justify-between'>
        <img className="h-14 w-14 object-contain"  src={props.image} alt="" />
        <p className='text-white '>{props.text}</p>
    </div>
  )
}

export default Technology