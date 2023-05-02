import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hii, This is Lakshay Goyal",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen sm:min-w-full flex-col items-center justify-center space-y-8 overflow-hidden text-center ">
      <BackgroundCircles />
      <img
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src="/about-02.jpeg"
        alt=""
      />
      <div className="z-0">
        <h2 className="pb-2 text-xs uppercase tracking-[10px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="px-10 text-2xl w-[390px] sm:w-full sm:text-4xl font-semibold lg:text-6xl">
          <span className="mr-1 sm:mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact"> 
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
