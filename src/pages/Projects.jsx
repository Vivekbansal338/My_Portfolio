import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import "./Projects.scss";

const projects = [
  {
    title: "Recipe Rack",
    description: "Full stack recipe app",
    applink: "https://recipe-rack-frontend.vercel.app/",
    githublink: "https://github.com/Vivekbansal338/RecipeRackFrontend",
    projectimg_url: "https://recipe-rack-frontend.vercel.app/",
  },
  {
    title: "My Portfolio",
    description: "My portfolio website",
    applink: "https://vivek-bansal-portfolio.vercel.app/",
    githublink: "https://github.com/Vivekbansal338/My_Portfolio",
    projectimg_url: "https://vivek-bansal-portfolio.vercel.app/",
  },
];

const Projects = () => {
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
          {projects.map((project, index) => (
            <ProjectCard projectdata={project} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
