import React from "react";

const Contact = () => {
  return (
    <div name="Contact Us" className="w-full h-[80vh] bg-gradient-to-b from-black via-black to-gray-800  text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center">
          <form action="https://getform.io/f/aolmgzdb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-2 my-4 bg-transparent rounded-md p-2 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border-2 my-4 bg-transparent rounded-md p-2 text-white focus:outline-none"
            />
            <textarea
              type="text"
              rows="5"
              name="message"
              placeholder="Enter your message"
              className="border-2 my-4 bg-transparent rounded-md p-2 text-white focus:outline-none"
            />
            <button className="group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-black-500">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
