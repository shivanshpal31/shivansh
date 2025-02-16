import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="Contact Us"
      className="w-full h-[80vh] bg-gradient-to-b from-black via-black to-gray-800  text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <motion.p
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2,
            }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Contact
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
            Submit the form below to get in touch with me
          </motion.p>
        </div>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/aolmgzdb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <motion.input
              initial={{ opacity: 0.1, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.2,
              }}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-2 my-4 bg-transparent rounded-md p-2 text-white focus:outline-none"
            />
            <motion.input
              initial={{ opacity: 0.1, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.5,
              }}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border-2 my-4 bg-transparent rounded-md p-2 text-white focus:outline-none"
            />
            <motion.textarea
              initial={{ opacity: 0.1, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.8,
              }}
              type="text"
              rows="5"
              name="message"
              placeholder="Enter your message"
              className="border-2 my-4 bg-transparent rounded-md p-2 text-white focus:outline-none"
            />
            <motion.button initial={{ opacity: 0.1, scale: 0.1 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 100,
               damping: 10,
               delay: 1.2,
             }} className="group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-black-500">
              Let's talk
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
