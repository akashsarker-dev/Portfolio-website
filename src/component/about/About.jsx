import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
  
  return (
    <div className=' py-12 md:py-20 bg-second-primary-color' data-aos="zoom-in"
    data-aos-duration="2000">
        <div className='mx-auto max-w-container '>
        <h2 className='text-center text-4xl md:text-5xl font-bold text-text-color'>About <span className='text-primary-color'>Me</span></h2>
       
        <img className='mx-auto py-6 md:mt-14 md:mb-8 scale-75 md:scale-100' src='../public/about.png' alt="" />
        
       <div className='flex flex-col items-center'>
       <h3 className=' text-text-color text-3xl font-bold '>Fontent Developer</h3>
        
        <p className='text-center line-clamp-3 mb-5 text-text-color py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id eaque sunt molestiae possimus quasi repellendus esse dolorum repellat praesentium nulla quibusdam nesciunt dicta at vitae pariatur saepe officiis modi earum ea iusto, deleniti optio sequi? Iure, nisi id. Nisi laborum sit, neque fuga recusandae esse sapiente beatae quod ut omnis. Aut voluptas voluptatibus cum cupiditate laboriosam atque libero placeat.</p>

        <button id="btn" className="relative after:absolute overflow-hidden py-3 px-7 bg-transparent border-2 font-semibold text-primary-color rounded-lg   border-primary-color  hover:text-[#081B29] after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:transition-transform after:duration-500 after:content-[''] duration-500
        after:origin-top-left after:hover:scale-x-100 after:scale-x-0
        transition-colors after:bg-primary-color z-10 ">Resume</button>
       </div>
        
      </div>
    </div>
  )
}

export default About
