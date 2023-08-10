import React from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import avatarimg from "../assets/profile.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link, Button } from "@nextui-org/react";
import { IoIosPaper } from "react-icons/io";
import "./Home.scss";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    loop: 0,
    cursor: true,
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section id="home" className="app__home">
      <motion.div
        className="app__home-left"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <h1>
          Hello, I'm <br className="break" />
          <span>Vivek Bansal</span>
        </h1>
        <span>
          {text.split(" ").map((minitext, index) => (
            <span
              style={index === 1 ? { color: "var(--text3)" } : null}
              key={index}
            >
              {minitext + " "}
            </span>
          ))}
          <Cursor cursorColor="var(--text2)" />
        </span>
        <Link
          isExternal
          href="https://drive.google.com/file/d/14rE_4_pRGefCCJQM2uwZOU_m1uvncMva/view?usp=sharing"
          className="px-4 py-3 mt-4 bg-text2 rounded-[10px] text-white"
        >
          <IoIosPaper className="mr-2" />
          View Resume
        </Link>
      </motion.div>
      <motion.div
        className="app__home-right"
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <Image
          isBlurred
          src={avatarimg}
          width={500}
          height={500}
          alt="NextUI Album Cover"
          className="rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default Home;
