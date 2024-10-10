import React from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/EvitaProfile.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
 hidden: {x: -100, opacity: 0},
 visible: {
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
 },
});

const Hero = () => {
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                  <motion.h1
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  className="pb-16 text-3xl font-bold tracking-tigh lg:mt-16 lg:text-5xl"
                  >
                    Evita R
                  </motion.h1>
                  <motion.span
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3x1 tracking-tigh text-transparant'
                  >
                  Student & Software Enginering
                  </motion.span>
                  <motion.p
                  variants={container(0.5)}
                  initial='hidden'
                  animate='visible'
                  className="my-2 max-w-x1 py-6 font-light tracking tighter"
                  >
                    {HERO_CONTENT}
                  </motion.p>
             
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                      <motion.img
                      initial={{x: 100, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration:2, delay1: 1.2}}
                      className='roundes-2xl'
                      src={profilepic}
                      alt="Evita R"
                      width="250px"
                      />
                    </div>
                  </div>
          </div>
        </div>
    )
}

export  default Hero;