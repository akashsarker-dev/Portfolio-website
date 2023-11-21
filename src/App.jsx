
import './App.css'
import Navbar from './component/Nabvar/Navbar'
import About from './component/about/About'
import Banner from './component/banner/Banner'
import Contact from './component/contact/Contact'
import CopyRight from './component/copyright/CopyRight'
import Project from './component/project/Project'
import Skill from './component/skill/Skill'

function App() {

  return (
    <div className='px-2'>
    {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Skill></Skill>
      <Contact></Contact>
      <CopyRight></CopyRight>
    </div>
  )
}

export default App
