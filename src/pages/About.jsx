import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="app__about">
      <motion.div className="app__about-header">
        <h1>About Me</h1>
      </motion.div>
      <motion.div className="app__about-container"></motion.div>
    </section>
  );
};

export default About;
