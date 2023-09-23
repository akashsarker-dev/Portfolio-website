import { Flowbite } from 'flowbite-react'
import  'flowbite'


const Navbar = () => {
  return (
    <div>
    <nav className="bg-transparent border-gray-200 max-w-container mx-auto">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Akash Sarker</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false">
            
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row gap-x-11  md:mt-0 md:border-0  items-center ">
            <li>
            <a href="#" className="block   text-text-color md:bg-transparent" aria-current="page">Home</a>
            </li><li>
            <a href="#" className="block   text-text-color md:bg-transparent" aria-current="page">About</a>
            </li><li>
            <a href="#" className="block   text-text-color md:bg-transparent " aria-current="page">Project</a>
            </li>
            <li>
            <a href="#" className="block  text-text-color md:bg-transparent " aria-current="page">Skills</a>
            </li>
            <li>
            <a href="#" className="block text-text-color md:bg-transparent" aria-current="page">Contact</a>
            </li>
           

            <button class="
            relative after:absolute  py-3 px-7 bg-transparent border-2  text-primary-color rounded-lg   border-primary-color  hover:text-[#081B29] after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:transition-transform after:duration-500 after:content-[''] duration-500
            after:origin-top-left after:hover:scale-x-100 after:scale-x-0
             transition-colors   after:bg-primary-color  ">Resume</button>
           
        </ul>
        </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar
