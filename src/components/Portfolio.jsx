import React from "react";
// import portImage from "../assets/Portfolio.webp";
import codersCoffee from "../assets/coders coffee.webp";
import swimFish from "../assets/swim fish.webp";
import textMani from "../assets/text manipulator.webp";
import webScrap from "../assets/web scraper.webp";
import newsEra from "../assets/newsera.webp";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src:codersCoffee,
    },
    {
      id: 2,
      src: swimFish,
    },
    {
      id: 3,
      src: textMani,
    },
    {
      id: 4,
      src: webScrap,
    },
    {
      id: 5,
      src: newsEra,
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
      name="Portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="py-6">Check our some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:pb-40 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  className="rounded-md duration-200 hover:scale-105"
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Code
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
