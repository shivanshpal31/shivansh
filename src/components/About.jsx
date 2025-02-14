import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            About
          </p>
        </div>
        <p className="text-xl mt-5 justx1 ">
          I am a passionate Software Engineer with experience in full-stack web
          development, automation, and system integration. Currently working at
          Accenture, I specialize in optimizing workflows, enhancing database
          performance, and developing scalable solutions. I have successfully
          automated processes, leading to a 70% efficiency boost, and integrated
          Kinaxis systems to resolve 95% of workflow errors, ensuring seamless
          operations. My technical expertise spans Java, React.js, Python, SQL,
          and cloud platforms like AWS, allowing me to deliver high-performance
          applications with a focus on user experience and business growth.
        </p>
        <br />
        <p className="text-xl">
          Beyond my professional role, I have built multiple personal projects,
          including a fully responsive coffee-selling website with 15+ dynamic
          animations and a Python-based web scraping tool that improved data
          extraction efficiency by 60%. With a strong problem-solving mindset, I
          have tackled 500+ DSA challenges, showcasing my analytical thinking
          and coding proficiency. I am always eager to explore new technologies,
          build impactful products, and contribute to innovative projects that
          make a difference.
        </p>
      </div>
    </div>
  );
};

export default About;
