import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.webp";
import java from "../assets/java.png";
import node from "../assets/node.png";
import excel from "../assets/excel.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import pandas from "../assets/pandas.png";
import { motion } from "framer-motion";

export const SkillSet = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 10,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: pandas,
      title: "Pandas",
      style: "shadow-pink-500",
    },
    {
      id: 12,
      src: excel,
      title: "Excel",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full pt-5 text-white">
        <div>
          <motion.p
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2,
            }}
            className="text-4xl font-bold border-b-4 border-gray-500  inline"
          >
            Skill Set
          </motion.p>
          <motion.p
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.5,
            }}
            className="py-6"
          >
            There are the technologies I've worked with
          </motion.p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between items-center shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" alt="" />
              <p className="mt-4 font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SkillSet;