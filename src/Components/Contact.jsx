import React from 'react'
import Tag from './Tag'
import {Mail,Copy,Phone} from "lucide-react";
import { MapPin,Github,Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
    <div className='bg-black px-2 pb-8'>
        <div className='pt-8 flex flex-col items-center'>
        <Tag text={"Contact"}/>
    </div>
    <div className='flex flex-col items-center'>
          <p className='text-gray-400 text-md font-extralight mb-10 text-center'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
          <div className='text-white flex gap-4 mb-4'>
            <Mail />
            <p className='font-semibold'>anshuman.gupta2037@gmail.com</p>
            {/* <Copy /> */}
          </div>
          <div className='text-white flex gap-4 mb-12'>
            <Phone />
            <p className='font-semibold'>+91 9149132230</p>
            {/* <Copy /> */}
          </div>
          <p className='text-gray-400 text-sm font-extralight'>You may also find me on these platforms!</p>
          <div className='text-gray-400 flex gap-4 mt-2'>
                <a href="https://github.com/anshumann01/"><Github /></a>
                <a href="https://www.linkedin.com/in/anshuman-gupta-cs/"><Linkedin /></a>
            </div>
    </div>
    </div>
    </section>
  )
}

export default Contact