import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Contact = () => {
  const handleForm = () => {
    console.log("jdhfuih");
  };
  return (
    <div className="md:py-20 py-12">
      <h2 className="text-center text-3xl md:text-4xl md:text-[50px] mb-12 md:mb-[90px] font-bold text-text-color">
        Contact <span className="text-primary-color">Me</span>
      </h2>

      <div className="flex lg:gap-16 flex-wrap gap-y-10 gap-x-4 justify-between max-w-container mx-auto">
        <div>
          <h3 className="text-text-color text-2xl mb-10">My Address</h3>
          <div className="flex items-center">
            <div className="p-4 bg-primary-color rounded-full">
              <BiSolidUser className="text-white text-2xl "></BiSolidUser>
            </div>
            <div className="ml-7">
              <h3 className="text-text-color text-lg font-semibold">Name</h3>
              <p className="text-lg text-[rgba(237,237,237,0.8)]">
                Akash Sarker
              </p>
            </div>
          </div>

          <div className="flex items-center mt-5">
            <div className="p-4 bg-primary-color rounded-full">
              <MdMail className="text-white text-2xl font-bold"></MdMail>
            </div>
            <div className="ml-7">
              <h3 className="text-text-color text-lg font-semibold">Email</h3>
              <a
                href="mailto:akashsarkeronline@gmail.com"
                className="text-lg text-[rgba(237,237,237,0.8)]"
              >
                akashsarkeronline@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center mt-5">
            <div className="p-4 bg-primary-color rounded-full">
              <BsFillTelephoneFill className="text-white text-2xl "></BsFillTelephoneFill>
            </div>
            <div className="ml-7">
              <h3 className="text-text-color text-lg font-semibold">Phone</h3>
              <a
                href="tel:+8801886863663"
                className="text-lg text-[rgba(237,237,237,0.8)]"
              >
                +8801886863663
              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <form onSubmit={handleForm}>
            <div class="relative md:w-96">
              <input
                required
                id="floating_filled"
                class="block px-5 pb-2.5 h-16 pt-4 w-full border-2 text-white bg-transparent rounded-md border-1  border-primary-color text-lg appearance-none focus:outline-none  peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-text-color  duration-300 transform -translate-y-4 text-lg scale-75 top-2 bg-[#081B29] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Full Name
              </label>
            </div>

            <div class="relative md:w-96 my-5">
              <input
                required
                id="subject"
                class="block px-5 pb-2.5 h-16 pt-4 w-full border-2 text-white bg-transparent rounded-md border-1  border-primary-color text-lg appearance-none focus:outline-none  peer"
                placeholder=" "
              />
              <label
                for="subject"
                class="absolute text-text-color  duration-300 transform -translate-y-4 text-lg scale-75 top-2 bg-[#081B29] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Subject
              </label>
            </div>

            <div class="relative w-full my-5">
              <textarea
                id="comment"
                class="w-full focus:outline-none h-[136px] text-white border-2 rounded-md border-primary-color rounded-l p-5 text-sm  bg-transparent focus:border-primary-color focus:shadow-transparent focus:shadow-none"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button className="flex items-center justify-center text-primary-color rounded-md text-xl gap-3 w-full border-2 py-3 font-bold border-primary-color bg-[#112E42] hover:bg-primary-color hover:text-white duration-500">
              Send Message <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
