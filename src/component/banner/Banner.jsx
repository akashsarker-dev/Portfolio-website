import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImg from '../../assets/banner.png';
AOS.init();
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {
  return (
    <>
      <div className="flex px-2 max-w-container mx-auto pt-5 items-center ">
        <div className="sm:w-1/2 md:py-20  py-14"
          data-aos="zoom-in-left"
          data-aos-duration="2000">

          <h1 className="text-text-color leading-relaxed sm:w-64 md:w-96 md:text-5xl text-3xl font-bold ">
          Hi, I'm
          <span className="block leading-relaxed">Akash Sarker</span>
          </h1>
          <h3 className="text-2xl text-primary-color font-semibold my-3 md:m-0">
          
          <TypeAnimation sequence={[
        'I am Frontend Web Developer',
        1000,
        'I am MERN Stack Developer',
        1000,
        'I am Full Stack web Developer',
        1000
      ]} wrapper="span" speed={50} repeat={Infinity}/>
          </h3>
          <div className="flex  gap-6 md:my-8 my-6">
            <button className="button-me md:py-3 md:px-7 py-2 px-5 font-semibold text-base overflow-hidden  border-primary-color border-2 rounded-full md:rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color ">
              About Me
            </button>

            <button
              className="relative hidden md:block after:absolute overflow-hidden py-3 px-7 bg-transparent border-2  text-primary-color rounded-lg   border-primary-color  hover:text-[#081B29] after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:transition-transform after:duration-500 after:content-[''] duration-500
             after:origin-top-left after:hover:scale-x-100 after:scale-x-0
             transition-colors after:bg-primary-color"
            >
              Resume
            </button>
          </div>
          <div className="flex  gap-x-6 text-4xl sm:mt-10 md:mt-8">
            <BsFacebook className=" rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1"></BsFacebook>
            <BsGithub className="rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1"></BsGithub>
            <BsLinkedin className="rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1"></BsLinkedin>
          </div>
        </div>
        <div className="sm:w-1/2 hidden sm:block" data-aos="zoom-in-right" data-aos-duration="2000">
          <img
            className="rounded-full sm:scale-50 lg:ml-40 md:scale-75 outline outline-offset-2 outline-2 p-1 outline-white "
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
