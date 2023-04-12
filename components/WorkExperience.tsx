import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-lft relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 md:flex-row "
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500 ">
        Experience
      </h3>

      <div className="  flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-l bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
            src="https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light pl-2">WEB DEVELOPER INTERN</h4>
            <p className="mt-1 text-2xl font-bold text-[#F7AB0A] pl-2">MICROSOFT</p>
            <p className="py-5 uppercase text-gray-300 pl-2">
              4 APRIL 2022 - 10 JULY 2022
            </p>
            <ul className="ml-5 list-disc space-y-4 text-md  ">
              <li>
                Developed and maintained user-friendly web interfaces: Worked
                with HTML, CSS, and JavaScript to create user-friendly web
                interfaces for various web applications.
              </li>
              <li>
                Worked with cloud technologies: Gained experience deploying and
                managing web applications using Microsoft's cloud technologies,
                including Azure and Office 365.
              </li>
              <li>
                Designed and implemented responsive web interfaces: Developed
                responsive web interfaces that can adapt to different screen
                sizes and devices.
              </li>
              <li>
                Conducted code reviews and testing: Conducted thorough code
                reviews and testing to ensure the quality and stability of web
                applications.
              </li>
              <li>
                Gained valuable professional experience: Developed skills in web
                development, project management, and communication, while
                gaining valuable professional experience at a leading technology
                company.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
            src="https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">WEB DEVELOPER INTERN</h4>
            <p className="mt-1 text-2xl font-bold text-[#F7AB0A]">MICROSOFT</p>
            <p className="py-5 uppercase text-gray-300">
              4 APRIL 2022 - 10 JULY 2022
            </p>
            <ul className="ml-5 list-disc space-y-4 text-md">
              <li>
                Developed and maintained user-friendly web interfaces: Worked
                with HTML, CSS, and JavaScript to create user-friendly web
                interfaces for various web applications.
              </li>
              <li>
                Worked with cloud technologies: Gained experience deploying and
                managing web applications using Microsoft's cloud technologies,
                including Azure and Office 365.
              </li>
              <li>
                Designed and implemented responsive web interfaces: Developed
                responsive web interfaces that can adapt to different screen
                sizes and devices.
              </li>
              <li>
                Conducted code reviews and testing: Conducted thorough code
                reviews and testing to ensure the quality and stability of web
                applications.
              </li>
              <li>
                Gained valuable professional experience: Developed skills in web
                development, project management, and communication, while
                gaining valuable professional experience at a leading technology
                company.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
