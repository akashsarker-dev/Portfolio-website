import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";


const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap px-2 max-w-container mx-auto pt-5  md:py-20 items-center">
        <div className="md:w-1/2 md:py-20 py-16"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <h1 className="text-text-color sm:w-64 md:w-96 md:text-6xl text-3xl font-bold ">
          Hello I'm
          <span className="block"> Akash Sarker</span>
          </h1>
          <h3 className="text-xl text-primary-color font-bold my-3">
          Frontend Web Developer
          </h3>
          <p className="text-text-color">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            odit suscipit debitis tempore voluptates, commodi hic mollitia harum
            adipisci sequi praesentium, nihil, et asperiores itaque.
          </p>
          <div className="flex gap-6 md:my-10 my-5">
            <button className="button-me py-3 overflow-hidden px-7 border-primary-color border-2 rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color ">
              About Me
            </button>

            <button
              className="relative after:absolute overflow-hidden py-3 px-7 bg-transparent border-2  text-primary-color rounded-lg   border-primary-color  hover:text-[#081B29] after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:transition-transform after:duration-500 after:content-[''] duration-500
             after:origin-top-left after:hover:scale-x-100 after:scale-x-0
             transition-colors after:bg-primary-color"
            >
              Resume
            </button>
          </div>
          <div className="flex  gap-x-6 text-4xl ">
            <BsFacebook className=" rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1   "></BsFacebook>
            <BsGithub className="rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1   "></BsGithub>
            <BsLinkedin className="rounded-full outline-2 outline-primary-color text-primary-color outline outline-offset-2 p-1   "></BsLinkedin>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block" data-aos="zoom-in-right" data-aos-duration="2000">
          <img
            className="rounded-full md:ml-40 scale-75 outline outline-offset-2 outline-2 p-1 outline-white "
            src="../public/banner.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
