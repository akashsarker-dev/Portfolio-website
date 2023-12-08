import React, { useRef, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill, BsFillSendFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const Contact = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    subject_name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      message: formData.message,
      subject: formData.subject_name,
    };

    const serviceId = 'service_tw4tzqu';
    const templateId = 'template_50878gn';
    const userId = 'aibuKa_1To9LUCPDK';

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        Swal.fire({
          title: "Thank you...",
          text: "Your Message Send Successfully",
          icon: "success",
          background:'#0d2b41',
          confirmButtonColor:'#00abf0',
          color:'#fff',
          position: 'center',
        });
        console.log('Email sent successfully:', response);
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
          subject_name: ''
          
        })
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
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
          <form ref={form} onSubmit={handleSubmit}>
            <div className="relative md:w-96">
              <input onChange={handleChange} value={formData.user_name} type="text" name="user_name"
                required id="floating_filled" 
                className="block px-5  h-14 w-full border-2 text-white bg-transparent rounded-md border-1  border-primary-color text-lg appearance-none focus:outline-none  peer"
                placeholder=" " />
              <label
                htmlFor="floating_filled"
                className="absolute text-text-color  duration-300 transform -translate-y-4 text-lg scale-75 top-2 bg-[#081B29] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" >
                Full Name
              </label>
            </div>
            
            <div className="relative md:w-96 my-5">
              <input onChange={handleChange} type="text" value={formData.subject_name}  name="subject_name"
                required id="subject_name"
                className="block h-14 px-3  w-full border-2 text-white bg-transparent rounded-md border-1  border-primary-color text-lg appearance-none focus:outline-none  peer"
                placeholder=" " />
              <label
                htmlFor="subject_name"
                className="absolute text-text-color  duration-300 transform -translate-y-4 text-lg scale-75 top-2 bg-[#081B29] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" >
                Subject
              </label>
            </div>

            <div className="relative md:w-96 ">
              <input onChange={handleChange} value={formData.user_email} required type="email" placeholder=" "
                name="user_email" id="email"
                className="block h-14 px-3  w-full border-2 text-white bg-transparent rounded-md border-1  border-primary-color text-lg appearance-none focus:outline-none  peer"
                 />
              <label htmlFor="email"
                className="absolute text-text-color  duration-300 transform -translate-y-4 text-lg scale-75 top-2 bg-[#081B29] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">
                Enter You Email
              </label>
            </div>

            <div className="relative w-full my-5">
              <textarea  onChange={handleChange} value={formData.message} name="message" id="comment" placeholder="Write a comment..." 
                className="w-full focus:outline-none h-[100px] text-white border-2 rounded-md border-primary-color rounded-l p-5 text-sm  bg-transparent focus:border-primary-color focus:shadow-transparent focus:shadow-none" required ></textarea>
            </div>
            <button type="submit" value="Send" className="flex items-center justify-center text-primary-color rounded-md text-xl gap-3 w-full border-2 py-3 font-bold border-primary-color bg-[#112E42] hover:bg-primary-color hover:text-white duration-500">
              Send Message <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
