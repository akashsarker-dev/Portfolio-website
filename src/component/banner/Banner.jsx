import React from 'react'
import { BsFacebook, BsGithub,BsLinkedin} from 'react-icons/bs';
import  'flowbite'

const Banner = () => {
  return (
    <>
    <div className='flex  max-w-container mx-auto items-center'>
        <div className='w-1/2 py-20 '>
        <h1 className='text-text-color text-6xl font-bold '>Hi, I'm Akash Sarker</h1>
        <h3 className='text-3xl text-primary-color font-bold my-3'>Fontend Devloper</h3>
        <p className='text-text-color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum odit suscipit debitis tempore voluptates, commodi hic mollitia harum adipisci sequi praesentium, nihil, et asperiores itaque. Reiciendis quisquam excepturi libero sunt accusamus tempora natus eligendi voluptatem, reprehenderit, animi, est tenetur nisi! Omnis iure in amet libero, dignissimos nihil aut quae reprehenderit.</p>
            <div className='flex gap-6 my-10'>
           <button className="button-me py-3 px-7 border-primary-color border-2 rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color ">About Me</button>

             <button className="relative after:absolute overflow-hidden py-3 px-7 bg-transparent border-2  text-primary-color rounded-lg   border-primary-color  hover:text-[#081B29] after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:transition-transform after:duration-500 after:content-[''] duration-500
             after:origin-top-left after:hover:scale-x-100 after:scale-x-0
             transition-colors   after:bg-primary-color  ">Resume</button>
            </div>
             <div className='flex  gap-x-6 text-4xl '>
              <BsFacebook className=' rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1   '></BsFacebook>
              <BsGithub className='rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1   '></BsGithub>
              <BsLinkedin className='rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1   '></BsLinkedin>
             </div>
            
      



      
        </div>
        <div>
        <img className='rounded-full ml-40 scale-75 outline outline-offset-2 outline-2 p-1 outline-white ' src="../public/banner.png" alt="" />
        </div>
    </div>
</>
  )
}

export default Banner
