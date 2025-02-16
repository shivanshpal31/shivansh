import React from "react";
// import portImage from "../assets/Portfolio.webp";
import codersCoffee from "../assets/coders coffee.webp";
import swimFish from "../assets/swim fish.webp";
import textMani from "../assets/text manipulator.webp";
import webScrap from "../assets/web scraper.webp";
import newsEra from "../assets/newsera.webp";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: codersCoffee,
      demo: "https://coffee-with-shiv.vercel.app/",
      code: "https://github.com/shivanshpal31/coffeeWithShiv",
      name: "Coders Coffee",
      style: {
        cursor: "pointer",
      },
    },
    {
      id: 2,
      src: swimFish,
      demo: "https://github.com/shivanshpal31/SwimFish",
      code: "https://github.com/shivanshpal31/SwimFish",
      name: "Swim Fish",
      style: {
        cursor: "pointer",
      },
    },
    {
      id: 3,
      src: textMani,
      demo: "https://my-project-inky-seven.vercel.app/",
      code: "https://github.com/shivanshpal31/TextManipulator",
      name: "Text Manipulator",
      style: {
        cursor: "pointer",
      },
    },
    {
      id: 4,
      src: webScrap,
      demo: "",
      code: "https://github.com/shivanshpal31/Weather_Forecast_Webscraping",
      name: "Weather Forecast Report",
      style: {
        cursor: "not-allowed",
      },
    },
    {
      id: 5,
      src: newsEra,
      demo: "https://github.com/shivanshpal31/NewsEra",
      code: "https://github.com/shivanshpal31/NewsEra",
      name: "News Era",
      style: {
        cursor: "pointer",
      },
    },
  ];

  return (
    <div
      className="w-full  bg-gradient-to-b from-black via-black to-gray-800 text-white"
      name="Portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.2,
          }}
          className="pb-8 "
        >
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check our some of my work right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:pb-40 px-12 sm:px-0">
          {portfolio.map(({ id, src, style, demo, code, name }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  className="rounded-md duration-200 hover:scale-105"
                  alt=""
                />
                <p className="text-xl pt-2 font-semibold text-center">{name}</p>
                <div className="flex items-center justify-center">
                  <button
                    style={style}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={demo}
                      style={style}
                    >
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    <a target="_blank" rel="noreferrer" href={code}>
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
