import React from 'react'
import Tag from './Tag'
import photo from "../assets/myphoto1.jpeg"

const About = () => {
  return (
    <>
    <div className='bg-gray-900 pt-8 flex flex-col items-center'>
        <Tag text={"About me"}/>
    </div>   
    <div className='bg-gray-900 px-2 pb-8 xl:flex xl:justify-around xl:items-center'>
        <div className='pt-8 flex flex-col items-center'>
        <img className='h-100 w-auto mb-10 object-fit' src={photo} alt="" />
    </div>
    <div className='xl:w-1/2'>
         <h1 className='font-semibold text-2xl mb-2 text-white'>Curious about me? Here you have it:</h1>
            <p className='text-gray-400 text-sm font-extralight mb-10'>
              I was born and brought up in Badaun, Uttar Pradesh, and I am currently pursuing a Bachelor of Technology in Computer Science from GLA University, Mathura. I am focused on learning and applying practical skills in software and web development, with an interest in building clean and functional web applications. <br /><br />

I am an aspiring full-stack developer with a strong focus on front-end development. I work on creating responsive and user-friendly interfaces while maintaining clean and readable code. I prefer structured development practices and try to follow standard coding conventions in my projects. <br /><br />

My core technical skills include HTML, CSS, and JavaScript, which I use to build modern web interfaces. I have hands-on experience with React, where I work with components, props, state, and responsive layouts. I use Tailwind CSS and Bootstrap to design responsive user interfaces efficiently. For version control and project management, I regularly use Git and GitHub. <br /><br />

In addition to web technologies, I have working knowledge of Java and C#, which has helped me understand object-oriented programming concepts such as classes, objects, inheritance, and basic problem-solving techniques. I focus on writing clear and maintainable code and improving my logical thinking through consistent practice. <br /><br />

I worked as a Trainee at Escecion Technologies Pvt. Ltd. (DevsLane) from June 2025 to November 2025. During this period, I focused on learning web development concepts, understanding project structures, and improving my development workflow. This experience helped me gain exposure to real-world development practices and strengthened my technical foundation. <br /><br />

At present, I am working on improving my full-stack development skills and building projects to enhance my practical experience. I aim to grow as a developer by continuously learning, practicing, and applying my skills in real-world scenarios.
            </p>
    </div>
    </div>
    </>
  )
}

export default About