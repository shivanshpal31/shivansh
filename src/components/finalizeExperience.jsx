import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const finalizeExperience = () => {
  const experiences = [
    {
      company: "Accenture Private Solution",
      role: "Associate Software Engineer",
      duration: "October 2023 - Present",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png",
      points: [
        "Integrated Kinaxis with other systems to enable seamless data flow, resolving 95% of workflow and outbound job errors to ensure efficient system operations.",
        "Created automation scripts to streamline workflows and enhance efficiency by 70%.    ",
        "Resolved enterprise issues with customer focus, achieving 95% satisfaction across project sections",
        "Designed and maintained relational databases, resulting in a 30% increase in query performance and ensuring 100% data integrity across systems.",
        "Applied Agile methodologies to manage project timelines and analyzed 1M+ records with Python and SQL, boosting project completion by 20% and decision-making efficiency by 25%."
      ],
      url: "https://www.accenture.com/in-en",
    },
    {
      company: "Above the Fold",
      role: "Web Developer Intern",
      duration: "June 2022 - October 2023",
      logo: "https://i0.wp.com/abovethefold.in/wp-content/uploads/2024/12/atf-logo.png?fit=1848%2C1848&ssl=1",
      points: [
        "Devised and optimized WordPress and Shopify websites, improving user experience, SEO performance by 30%, and driving a 25% revenue increase and 40% sales growth.",
        "Led the end-to-end development of 5+ industry-level projects, ensuring efficient coding practices, on-time delivery, and scalable solutions.",
      ],
      url: "https://abovethefold.in/",
    },
  ];
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-0 flex flex-col  w-full h-full text-white">
        <div>
          <motion.p
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.5,
            }}
            className="py-5 text-center"
          >
            My Journey so far.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.1, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2,
            }}
            className="text-4xl font-bold py-5 text-center"
          >
            Work Experience.
          </motion.p>
        </div>
        <div className="w-full">
          <VerticalTimeline className="mt-9">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                className="relative vertical-timeline-element--work"
                contentStyle={{ background: "#1F2937", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #209be4" }}
                date={experience.duration}
                iconStyle={{ background: "#fff" }}
                icon={
                  <a
                    className="flex justify-center items-center w-full h-full"
                    href={experience.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </a>
                }
              >
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    {experience.role}
                  </h3>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {experience.company}
                  </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-white-100 text-[14px] pl-1 py-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default finalizeExperience;


// Seamless System Integration: Integrated Kinaxis with multiple systems to enable flawless data flow, resolving 95% of workflow and outbound job errors, ensuring smooth and efficient operations.

// Workflow Automation: Developed automation scripts that streamlined workflows, enhancing operational efficiency by 70% and reducing manual intervention.

// Customer-Centric Solutions: Addressed enterprise-level challenges with a customer-focused approach, achieving 95% satisfaction across project sections and delivering impactful results.

// Database Optimization: Designed and maintained relational databases, improving query performance by 30% and ensuring 100% data integrity across all systems.

// Agile-Driven Analytics: Leveraged Agile methodologies to manage project timelines and analyzed 1M+ records using Python and SQL, boosting project completion by 20% and decision-making efficiency by 25%.