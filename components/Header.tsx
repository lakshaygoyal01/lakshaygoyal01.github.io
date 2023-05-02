import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { navigation } from "../data";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 30,
      },
    },
  };

  return (
    <header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center '
      >
        {/* Social Icons */}
        <SocialIcon
          url='https://twitter.com'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://youtube.com'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://instagram.com'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://linkedin.com'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='z-30 flex cursor-pointer flex-row items-center text-gray-300'
      >
        {/* <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
        <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
            Get In Touch
          </p> */}
        <div className="">
          <div onClick={() => setIsOpen(true)}>
            <Bars3Icon className='mt-3 h-8 items-center text-gray-500' />
          </div>

          <motion.div
            variants={circleVariants}
            initial='hidden'
            animate={isOpen ? "visible" : "hidden"}
            className='bg-[rgb(36,34,34)] fixed right-0 top-0 h-4 w-4 rounded-full'
          ></motion.div>

          <motion.ul
            variants={ulVariants}
            initial='hidden'
            animate={isOpen ? "visible" : ""}
            className={`${
              isOpen ? "right-0" : "-right-full"
            } fixed bottom-0 top-0 flex w-full flex-col items-center justify-center overflow-hidden transition-all duration-300`}
          >
            {/* close icon */}
            <div
              onClick={() => setIsOpen(false)}
              className='absolute right-8 top-8 cursor-pointer'
            >
              <XMarkIcon className='h-8 w-8' />
            </div>
            {navigation.map((item, index) => {
              return (
                <li key={index} className='mb-8 hover:animate-bounce ease-in-out'>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={item.href}
                    // smooth={true}
                    // duration={500}
                    // offset={-70}
                    className='heroButton2 '
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
