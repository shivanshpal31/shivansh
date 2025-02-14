import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../assets/coffee/coffee1.png";
import Coffee2 from "../assets/coffee/coffee2.png";
import Coffee3 from "../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle:
      "Bold, pure, and energizing—coffee in its truest form.",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Cold Coffee",
    subtitle:
      "Warm your soul with every comforting sip.",
  },
  {
    id: 3,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle:
      "Chilled, creamy, and refreshingly delicious.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "endpoint",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Service = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header Section  */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.1,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.1,
          }}
          className="text-sm opacity-50"
        >
          Savor the aroma of freshly brewed coffee made from the finest beans.
          Each cup is crafted to perfection, delivering rich flavors and a
          smooth taste. Whether you love a bold espresso or a creamy latte, we
          serve freshness in every sip!
        </motion.p>
      </div>
      {/* card section  */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointern "
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray ">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
