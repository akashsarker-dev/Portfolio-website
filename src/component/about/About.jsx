import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutImg from '../../assets/about.png'
AOS.init();


const About = () => {
  
  return (
    <>
    
    <div className=' py-12 md:py-20 bg-second-primary-color' data-aos="zoom-in"
    data-aos-duration="2000">
        <div className='mx-auto max-w-container '>
        <h2 className='text-center text-3xl md:text-5xl font-bold text-text-color'>About <span className='text-primary-color'>Me</span></h2>
       
        <img className='mx-auto py-6 md:mt-14 md:mb-8 scale-75 md:scale-100' src={AboutImg} alt="" />
        
       <div className='flex flex-col items-center'>
       <h3 className=' text-text-color text-3xl font-bold '>Frontend Developer</h3>
        
        <p className='text-center line-clamp-3 mb-5 text-text-color py-6'>I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack projects.</p>

        <button id="btn" className="relative after:absolute overflow-hidden py-3 px-7 bg-transparent border-2 font-semibold text-primary-color rounded-lg   border-primary-color  hover:text-[#081B29] after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:transition-transform after:duration-500 after:content-[''] duration-500
        after:origin-top-left after:hover:scale-x-100 after:scale-x-0
        transition-colors after:bg-primary-color z-10 ">Resume</button>
       </div>
        
      </div>
    </div>
        </>
  )
}

export default About
