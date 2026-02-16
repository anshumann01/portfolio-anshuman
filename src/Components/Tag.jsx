import React from 'react'

const Tag = ({text}) => {
  return (
    <div className='text-white bg-gray-600 rounded-lg w-24 h-6 flex items-center justify-center text-xs mb-6'>{text}</div>
  )
}

export default Tag