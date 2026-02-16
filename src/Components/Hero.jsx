import React from 'react'
import { MapPin, Github, Linkedin } from 'lucide-react'
import photo from "../assets/myphoto.jpeg"

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-20">
      <div className='bg-black pt-6 text-white px-4 pb-16 
      xl:flex xl:flex-row-reverse xl:justify-around 
      xl:gap-24 xl:p-16 xl:h-screen xl:items-center'>

      <div className="flex justify-center xl:justify-end xl:w-1/2">
        <img
          className="h-60 xl:h-80 w-auto object-cover mb-10"
          src={photo}
          alt="Anshuman"
        />
      </div>

      <div className='xl:flex xl:flex-col xl:justify-center'>
        <div className='xl:flex xl:flex-col'>
          <h1 className='font-semibold text-3xl mb-2 md:text-4xl xl:text-5xl xl:mb-4'>
            Hi, I'm Anshuman 👋
          </h1>

          <p className='text-gray-400 text-sm font-extralight mb-10 md:text-md xl:text-lg'>
            I’m Anshuman Gupta, a computer science student and aspiring full-stack developer passionate about building responsive, user-centric web applications. I enjoy turning ideas into clean, scalable solutions while continuously learning modern technologies and improving my problem-solving skills.
          </p>

          <div className='flex text-gray-400 text-sm font-extralight items-center gap-2 pb-10'>
            <MapPin />
            <p>Mathura, India</p>
          </div>
        </div>

        <div className='text-gray-400 flex gap-4'>
          <a href="https://github.com/anshumann01/"><Github /></a>
          <a href="https://www.linkedin.com/in/anshuman-gupta-cs/"><Linkedin /></a>
        </div>
      </div>
    </div>
</section>

  )
}

export default Hero
