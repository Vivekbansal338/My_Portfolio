import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/Skills/SkillCard";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiExpress, SiThealgorithms, SiSololearn } from "react-icons/si";
import { AiFillApi, AiFillDatabase } from "react-icons/ai";
import { MdDataObject, MdSyncProblem } from "react-icons/md";
import { BiObjectsHorizontalCenter } from "react-icons/bi";
import { TbMathIntegralX } from "react-icons/tb";
import "./Skills.scss";

const frontend = [
  {
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: FaReact,
    color: "#61dafb",
  },
  {
    title: "HTML5",
    description:
      "The standard markup language for documents designed to be displayed in a web browser.",
    icon: FaHtml5,
    color: "#f06529",
  },
  {
    title: "CSS3",
    description:
      "A stylesheet language used to describe the presentation of a document written in HTML or XML.",
    icon: FaCss3,
    color: "#2965f1",
  },
  {
    title: "JavaScript",
    description:
      "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    icon: IoLogoJavascript,
    color: "#f0db4f",
  },
];

const backend = [
  {
    title: "Node.js",
    description:
      "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    icon: DiNodejs,
    color: "#5CDB95",
  },
  {
    title: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    icon: SiExpress,
    color: "#FF6F61",
  },
  {
    title: "MongoDB",
    description:
      "A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    icon: DiMongodb,
    color: "#6A0572",
  },
  {
    title: "REST API",
    description:
      "A software architectural style that defines a set of constraints to be used for creating Web services.",
    icon: AiFillApi,
    color: "#F48C06",
  },
];

const others = [
  {
    title: "C++",
    description:
      "A general-purpose, object-oriented programming language that extends the C language with additional features for higher-level programming tasks.",
    icon: MdDataObject,
    color: "#5C4E63",
  },
  {
    title: "DSA",
    description:
      "A fundamental topic in computer science that deals with organizing and processing data efficiently to solve problems.",
    icon: SiThealgorithms,
    color: "#2E8B57",
  },
  {
    title: "OOPs",
    description:
      "A programming paradigm based on the concept of objects, which can contain data and code to manipulate that data.",
    icon: BiObjectsHorizontalCenter,
    color: "#6A5ACD",
  },
  {
    title: "ML",
    description:
      "A subset of artificial intelligence that focuses on developing algorithms and statistical models for computers to perform tasks without explicit programming.",
    icon: TbMathIntegralX,
    color: "#FFA500",
  },
  {
    title: "Deep Learning",
    description:
      "A specialized field of machine learning that involves neural networks with multiple layers to learn and represent complex patterns in data.",
    icon: SiSololearn,
    color: "#008080",
  },
  {
    title: "SQL and DBMS",
    description:
      "Structured Query Language (SQL) is used to manage and manipulate relational databases, and Database Management Systems (DBMS) are software for interacting with databases.",
    icon: AiFillDatabase,
    color: "#000080",
  },
  {
    title: "Problem Solving",
    description:
      "The process of finding solutions to difficult or complex issues by breaking them down into smaller, manageable tasks.",
    icon: MdSyncProblem,
    color: "#FF0000",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="app__skills">
      <motion.div className="app__skills-header">
        <h1>
          Skills <span style={{ color: "var(--text2)" }}>&</span> Expertise
        </h1>
      </motion.div>
      <motion.div className="app__skills-container">
        <motion.div
          className="app__skills-container-frontend one"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <h2>
            Front<span>end</span>
          </h2>
          <motion.div className="frontend-container">
            {frontend.map((carddata, index) => (
              <SkillCard key={index} carddata={carddata} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="app__skills-container-frontend two"
          initial={{ opacity: 0, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <h2>
            Back<span>end</span>
          </h2>
          <motion.div className="frontend-container">
            {backend.map((carddata, index) => (
              <SkillCard key={index} carddata={carddata} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="app__skills-container-frontend three"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <h2>
            <span>O</span>ther
          </h2>
          <motion.div className="frontend-container">
            {others.map((carddata, index) => (
              <SkillCard key={index} carddata={carddata} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
