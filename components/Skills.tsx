import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10 "
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        HOver over a skill for current proficiency
      </h3> */}

      <div className=" absolute grid grid-cols-4 gap-5">
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6BaPUhJMAROwqU2rlBJwLYs2i0y6J5OSkA&usqp=CAU"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIoO7sspIvfUtPc3RmR9txl-3eTv0IDVq4zfnkT9o2zvwqUO2b&s"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUDFrhKMIPfGwgg0khrGopJP6p-MXnr0-iMTk4WgnbCJFvRa5&s"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9IotqHmDL7nH-73MJky_X3yLwf7MPmu4jz6GcplMrIqRFGF7&s"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC05G3q8hOuVSd1it6uaSPKM9si8o36OJ00MQQugtQlJ_pXqM&s"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://e7.pngegg.com/pngimages/669/447/png-clipart-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-thumbnail.png"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://b-new.be/wp-content/uploads/2013/06/FB.png"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="data:image/png;base64,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"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://repository-images.githubusercontent.com/157846876/70574400-9e6a-11e9-8708-22d4bf4c3322"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="data:image/png;base64,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"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="https://i.pinimg.com/736x/01/e5/00/01e500fca29c045d432b64f285f9c229.jpg"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
            src="data:image/png;base64,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"
          />
        </div>
      </div>
    </motion.div>
  );
}
