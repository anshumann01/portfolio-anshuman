import React from 'react'
import { SquareArrowOutUpRight } from "lucide-react"

const Work = (props) => {
  return (
    <section id="projects" className="scroll-mt-20">
    <div className="
      rounded-lg overflow-hidden mb-8
      xl:flex xl:max-w-[900px] xl:mx-auto
    ">
      {/* Image section */}
      <div className="bg-gray-700 flex justify-center items-center xl:w-[55%]">
        <img
          className="
            h-[75%] w-[85%]
            object-contain rounded-lg
          "
          src={props.image}
          alt=""
        />
      </div>

      {/* Content section */}
      <div className="
        bg-gray-800 text-white
        px-8 py-8
        xl:w-[45%]
        flex flex-col justify-center gap-6
      ">
        <h3 className="font-semibold text-xl xl:text-2xl">
          {props.text}
        </h3>

        <p className="text-gray-400 text-sm xl:text-base font-extralight">
          {props.details}
        </p>

        <a href={props.link} className="w-fit text-gray-300 hover:text-white">
          <SquareArrowOutUpRight />
        </a>
      </div>
    </div>
    </section>
  )
}

export default Work
