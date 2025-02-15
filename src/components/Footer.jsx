import React from "react";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={50} className="px-2" />
        </>
      ),
      href: "https://www.linkedin.com/in/shivansh-pal-ase/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={50} className="px-2" />
        </>
      ),
      href: "https://github.com/shivanshpal31",
      // style: 'rounded-tr-md',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={50} className="px-2" />
        </>
      ),
      href: "mailto:shivanshpal31@gmail.com",
      // style: 'rounded-tr-md',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={50} className="px-2" />
        </>
      ),
      href: "/Shivansh_Resume.pdf", 
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" pb-10 lg:pb-2 bg-gradient-to-b from-gray-800 to-black w-full">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-0 text-center py-0 px-2 sm:px-0 ">
        {links.map(({ id, child, href, style, download }) => (
          <div key={id} className={`shadow-md hover:shadow-xl duration-500 py-2 rounded-lg ${style} `}>
            <a
              href={href}
              className="flex justify-center items-center text-2xl w-full h-full text-white hover:scale-95 duration-300"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
