import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skill({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32 "
        src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
      />
      {/* <div className="absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Skill;
