import React from "react";
import HeroImage from "../assets/myPic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-[80vh] w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg text-white mx-auto lg:gap-10 flex flex-col items-center justify-center h-full py-10 lg:py-0 px-2 md:flex-row">
        <div>
          <motion.img
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt="My Profile Pic"
          />
        </div>
        <div className="flex flex-col justify-center h-full p-10 lg:p-0 items-center lg:items-start">
          <motion.h2
            initial={{ opacity: 0.1, y:-120 }}
            animate={{ opacity: 1, y:0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            className="text-2xl sm:text-7xl font-bold"
          >
            I'm Shivansh Pal
          </motion.h2>
          <motion.p
              initial={{ opacity: 0.1, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
            className="text-gray-500 py-12 max-w-md text-justify"
          >
            Software Engineer with expertise in web development, automation, and
            scalable solutions. Passionate about building interactive
            applications, solving complex problems, and optimizing workflows to
            enhance performance and efficiency.
          </motion.p>
          <motion.div
             initial={{ opacity: 0.1, scale: 0.1 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 100,
               damping: 10,
               delay: 1.2,
             }}
             whileTap={{ scale: 0.9 }}  
          >
            <NavLink
              to="/Portfolio"
              smooth
              duration={500}
              className="group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-black-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 ml-1 transition-all ease-in duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
