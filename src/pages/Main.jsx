import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="main__container">
      <Home />
      <Skills />
      <Projects />
      <Contact />
      {/* <Resume /> */}
      {/* <About /> */}
    </div>
  );
};

export default Main;
