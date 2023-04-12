import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left "
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="about-02.jpeg"
        className="md:h-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className=" text-[#F7AB0A]/50">Little</span>{" "}
          Background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, non,
          obcaecati, explicabo quam assumenda cupiditate necessitatibus eaque
          doloremque blanditiis dolor deserunt maxime pariatur enim molestiae
          et. Recusandae neque tenetur accusamus?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa similique ab nisi deleniti ducimus
          illum! Assumenda quaerat, laborum dicta officia quo est? Doloribus
          reiciendis nemo inventore aspernatur illum dolores necessitatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a culpa
          quod eligendi inventore. Libero repellat soluta saepe unde possimus
          vero voluptatibus doloribus pariatur voluptatum adipisci quia, ducimus
          culpa minus.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
