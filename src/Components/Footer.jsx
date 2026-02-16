import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white w-full h-12 flex items-center justify-center gap-2'>
        <Copyright className='h-4 w-4' />
        <p className='text-xs'>2026 | <span className='underline underline-offset-4'>Designed</span> and <span className='underline underline-offset-4'>coded</span> with ❤️️ by <span className='font-semibold'>Anshuman Gupta</span></p>
    </div>
  )
}

export default Footer