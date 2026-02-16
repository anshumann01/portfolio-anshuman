import React from 'react'
import { MoonStar }  from "lucide-react";

const MobileMenu = () => {
  return (
    <div className='h-[calc(100vh-4.5rem)] bg-black w-full'>
        <div className='bg-black w-full h-auto text-gray-500 py-2 px-4 text-lg flex flex-col gap-3 border-y border-gray-900'>
        <p>About</p>
        <p>Works</p>
        <p>Testinomials</p>
        <p>Contact us</p>
    </div>
    <div className='bg-black p-4 text-white'>
        <div className='flex justify-between mb-4'>
            {/* <p>Switch Theme</p>
            <MoonStar/> */}
        </div>
        <button className='bg-white rounded-full p-2 w-full text-black'><a
  href="/resume.pdf"
  download="Anshuman-Gupta-Resume.pdf"
  className="bg-white text-black px-3 py-1 rounded-full hover:bg-gray-300 transition"
>
  Download Resume
</a></button>
    </div>
    </div>
  )
}

export default MobileMenu