import React from "react";
// import portImage from "../assets/Portfolio.webp";
import codersCoffee from "../assets/coders coffee.webp";
import swimFish from "../assets/swim fish.webp";
import textMani from "../assets/text manipulator.webp";
import webScrap from "../assets/web scraper.webp";
import newsEra from "../assets/newsera.webp";
import { motion } from "framer-motion";

const MyWork = () => {
  const portfolio = [
    {
      id: 1,
      src: codersCoffee,
      demo: "https://coffee-with-shiv.vercel.app/",
      code: "https://github.com/shivanshpal31/coffeeWithShiv",
      name: "Coders Coffee",
      description:
        "A sleek, interactive coffee store built with React and Framer Motion. Features smooth animations, responsive design, and cross-device compatibility, showcasing modern web development and UX excellence.",
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
      description:
        "A dynamic React app for text transformation. Convert case, copy text, trim spaces, and count words/characters. Built with React, JavaScript, HTML, CSS, and Bootstrap for seamless user experience",
      style: {
        cursor: "pointer",
      },
    },
    {
      id: 4,
      src: webScrap,
      demo: "none",
      code: "https://github.com/shivanshpal31/Weather_Forecast_Webscraping",
      name: "Weather Forecast Report",
      description:
        "A Python app scraping global weather data for 100 cities (10-city demo). Uses BeautifulSoup for advanced scraping, data manipulation, and export. Perfect for showcasing automation and data skills.",
      style: {
        cursor: "not-allowed",
      },
    },

    {
      id: 5,
      src: newsEra,
      demo: "none",
      code: "https://github.com/shivanshpal31/NewsEra",
      name: "News Era",
      description:
        "A sleek React app fetching news from NewsAPI.org. Explore articles across 7 categories: Science, Tech, Business, and more. Dynamic, JSON-powered, and user-friendly for seamless news browsing.",
      style: {
        cursor: "pointer",
      },
    },
    {
      id: 2,
      src: swimFish,
      demo: "none",
      code: "https://github.com/shivanshpal31/SwimFish",
      name: "Swim Fish",
      description:
        "A fun web-based game built with HTML, CSS, and JavaScript. Control a fish, dodge obstacles, and score points with smooth animations and responsive design. Perfect for showcasing interactive web skills!",
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
          initial={{ opacity: 0.1, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.2,
          }}
          className="pb-8"
        >
          <p className="text-4xl font-bold border-b-4 pb-2 inline border-gray-500">
            My Work
          </p>
          <p className="py-6">Check our some of my work right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 lg:pb-40 px-12 sm:px-0">
          {portfolio.map(
            ({ id, src, style, demo, code, name, description }) => {
              return (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    className="rounded-md duration-200 hover:scale-105"
                    alt=""
                  />
                  <p className="text-xl pt-10 font-semibold text-center">
                    {name}
                  </p>
                  <p className="text-md pt-5 text-justify px-5 py-5">
                    {description}
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={demo}
                      style={style}
                      className={`w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-110 rounded-md bg-gradient-to-r from-red-500 to-black-500 ${
                        demo === `none` ? `hidden` : ""
                      }`}
                    >
                      {demo === "none" ? "No Preview" : "Preview"}
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={code}
                      className="w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-110 rounded-md bg-gradient-to-r from-blue-500 to-black-500"
                    >
                      Code
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
