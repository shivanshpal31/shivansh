import React from "react";
import BgImagePic from "../assets/bg-slate.png";
import cupImage from "../assets/black.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImagePic})`,
  backgroundSize: "Cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full pb-10 lg:pb-0">
        <div className="container">
          {/*Navbar Section*/}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/*Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* Text content Section  */}
            <div className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 1, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 1, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Savor the perfect brew! From rich espresso to creamy lattes,
                    we serve handcrafted coffee with love. Step in, sip, and
                    awaken your senses.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 ml-5"></div>
              </motion.div>
            </div>
            {/* Hero image Section  */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={cupImage}
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                alt=""
              />
              {/* Orange circle ring */}
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
              <div className="absolute -top-0 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Tumbler
                </h1>
              </div>
            </div>
            {/* <div></div> */}
            {/* Third Div Section  */}
            <div className="hidden lg:block">
              <div className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                  }}
                  className="opacity-0 text-7xl font-bold leading-tight ml-14"
                >
                  BLvk Tumbler
                </motion.h1>
                <motion.div
                  initial={{ opacity: 1, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Brewing Happiness</h1>
                    <h1 className="text-sm opacity-55 leading-loose italic ">
                      "Life begins after coffee. Every sip awakens your senses,
                      fuels your passion, and brings warmth to your soul. Start
                      your day with the perfect brew.""
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50 mr-5"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar menu section  */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
            <div className="w-full h-full flex justify-center items-center ">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* Line */}

                <div className="w-[1px] h-[70px] bg-white"></div>

                {/* Social Icon */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <a href="https://www.linkedin.com/in/shivansh-pal-ase/" rel="noreferrer" target="_blank"><FaLinkedin className="text-2xl" /></a>
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <a href="https://github.com/shivanshpal31" rel="noreferrer" target="_blank"><FaGithub className="text-2xl" /></a>
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <a href="https://www.instagram.com/shiv_ansh_31?igsh=NzgybjZrYWZ1d2c4" rel="noreferrer" target="_blank"><FaInstagram className="text-2xl" /></a>
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
