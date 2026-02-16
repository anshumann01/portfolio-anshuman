import React from 'react'
import Tag from './Tag'
import Technology from './Technology'

const Skills = () => {
  return (
    <div className='bg-black p-6'>
      <div className='pt-8 flex flex-col items-center'>
        <Tag text={"Skills"} />
      </div>

      <p className='text-gray-400 text-md font-extralight mb-14 text-center'>
        The skills, tools and technologies I am really good at:
      </p>

      <div
        className="
          grid grid-cols-2 gap-12
          sm:grid-cols-3
          md:grid-cols-4
          xl:grid-cols-5
          place-items-center
        "
      >
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" text="React" />
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" text="JavaScript" />
        <Technology image="https://img.icons8.com/color/1200/java-coffee-cup-logo--v1.jpg" text="Java" />
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/3840px-Git_icon.svg.png" text="Git" />
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" text="GitHub" />
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/960px-Logo_C_sharp.svg.png" text="C#" />
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" text="Bootstrap" />
        <Technology image="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" text="HTML" />
        <Technology image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png" text="CSS" />
        <Technology image="https://img.icons8.com/androidL/512/FFFFFF/tailwind_css.png" text="Tailwind CSS" />
      </div>
    </div>
  )
}

export default Skills
