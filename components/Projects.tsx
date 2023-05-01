import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row "
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center sm:justify-evenly space-y-5 p-7 md:p-44">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
              alt=""
              className="w-32 h-32 sm:h-[500px] sm:w-[500px] object-contain"
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-xl sm:text-4xl font-semibold">
                <span >
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <span className="text-[#F7AB0A]">Netflix Clone</span>
              </h4>

              <span className="text-center text-md md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                deleniti hic quam odit exercitationem est? Aliquid minus nam ea
                aut commodi architecto ut, illo suscipit illum. Illum,
                reprehenderit. Fugit, iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                aut commodi architecto ut, illo suscipit illum. Illum,
                reprehenderit. Fugit, iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                aut commodi architecto ut, illo suscipit illum. Illum,
                reprehenderit. Fugit, iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10 " />
    </motion.div>
  );
}
