import React, { useRef } from 'react'
import "./parallax.scss"
import { motion , useScroll, useTransform  } from 'framer-motion';

const Parallax = ({type}) => {
  const ref = useRef()
  const {scrollYProgress}  =useScroll({
    target:ref,
    offset:["start start", "end start"]
} )

const yText= useTransform(scrollYProgress , [0,1], ["0%","500%"])
const yBg= useTransform(scrollYProgress , [0,1], ["0%","100%"])
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #1b235d, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #097594)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "About Me" : "What I Have Done"}
      </motion.h1>

      <motion.div className="mountains"></motion.div>
      <motion.div
        // style={{ y: yBg }}
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" ? "/sun.png" : "/planets.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );  
}  

export default Parallax