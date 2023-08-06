import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import { Button } from "@nextui-org/react";
import forkyimg from "../assets/forky.png";
import "./Projects.scss";
const projects = [
  {
    title: "Recipe Rack",
    description: "Full stack recipe app",
    applink: "https://recipe-rack-frontend.vercel.app/",
    githublink: "https://github.com/Vivekbansal338/RecipeRackFrontend",
  },
  {
    title: "My Portfolio",
    description: "My portfolio website",
    applink: "https://vivek-bansal-portfolio.vercel.app/",
    githublink: "https://github.com/Vivekbansal338/My_Portfolio",
  },
  {
    title: "Forky",
    description: "Food recipe app",
    githublink: "https://github.com/Vivekbansal338/forky10",
    projectimg_url: forkyimg,
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projects" className="app__projects">
      <motion.div className="app__projects-header">
        <h1>
          <span style={{ color: "var(--text2)" }}>My</span> Projects
        </h1>
      </motion.div>
      <motion.div className="app__projects-container">
        <motion.div
          className="projects-container"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <ProjectCard projectdata={currentProject} key={currentProjectIndex} />
          <div className="carousel-navigation">
            <Button
              color="secondary"
              className="mr-[10px]"
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              color="secondary"
              className="ml-[10px] px-[20px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="app__projects-container-large">
        <motion.div
          className="projects-container-large"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          {projects.map((project, index) => (
            <ProjectCard projectdata={project} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
