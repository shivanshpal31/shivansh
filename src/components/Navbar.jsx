import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-scroll";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home", val: "/" },
    { id: 2, link: "About", val: "/about" },
    { id: 3, link: "Portfolio", val: "/portfolio" },
    { id: 4, link: "Experience", val: "/experience" },
    { id: 4, link: "Contact Us", val : "/contact"},
  ];
  return (
    <div className="flex justify-between items-center w-full px-4 py-5 text-white bg-black fixed">
      <div>
        <NavLink to={"/"} smooth duration={500}>
        <h1 className="font-signature text-5xl ml-2">Shivansh Pal</h1>
        </NavLink>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, val }) => (
          <ul
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-300"
          >
            <NavLink to={val} smooth duration={500}>
              {link}
            </NavLink>
          </ul>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FiAlignJustify size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
