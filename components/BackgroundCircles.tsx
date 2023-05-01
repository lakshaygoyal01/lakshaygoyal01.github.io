import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center max-w-[390px] sm:min-w-full"
    >
      <div className="absolute mt-52 h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[300px] w-[300px] sm:h-[650px] sm:w-[650px] animate-pulse rounded-full border border-[#F7AB0A] opacity-20" />
      <div className="absolute mt-52 h-[350px] w-[350px] sm:h-[800px] sm:w-[800px] rounded-full border border-[#333333]" />
    </motion.div>
  );
}

export default BackgroundCircles;
