import React from "react";
import Banner from "../../component/banner/Banner";
import About from "../../component/about/About.jsx";
import Skill from "../../component/skill/Skill.jsx";
import Project from "../../component/project/Project.jsx";
import Contact from "../../component/contact/Contact.jsx";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </>
  );
};

export default Home;
