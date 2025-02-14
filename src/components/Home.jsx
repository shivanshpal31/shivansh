import React from "react";
import HeroImage from "../assets/myPic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg text-white mx-auto lg:  gap-8 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold">I'm Shivansh Pal</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Software Engineer with expertise in web development, automation, and
            scalable solutions. Passionate about building interactive
            applications, solving complex problems, and optimizing workflows to
            enhance performance and efficiency. 
          </p>
          <div>
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
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt="My Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
