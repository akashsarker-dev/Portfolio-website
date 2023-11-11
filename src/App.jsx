
import './App.css'
import Navbar from './component/Navbar/Navbar'
import About from './component/about/About'
import Banner from './component/banner/Banner'
import Contact from './component/contact/Contact'
import CopyRight from './component/copyright/CopyRight'
import Project from './component/project/Project'
import Skill from './component/skill/Skill'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      {/* <Skill></Skill> */}
      <Contact></Contact>
      <CopyRight></CopyRight>
    </>
  )
}

export default App
