import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import duckImage from "../assets/duck.png"; // Ensure correct path

const brands = [
  "Nando's", "KUMON", "Fitness First", "Halfords", 
  "Smile Savvy", "Hilton", "Specsavers", "SterlingSky"
];

const ScrollPage = () => {
  const [calls, setCalls] = useState(100);
  const [rating, setRating] = useState(4); // Start from 4

  const duckAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Calls counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCalls((prevCalls) => Math.min(prevCalls + 1, 300)); // Faster increment
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Rating animation (4 → 5)
  useEffect(() => {
    const interval = setInterval(() => {
      setRating((prevRating) => Math.min(prevRating + 0.01, 5));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    // h-screen-50 p-6 bg-gradient-to-b from-white to-white
    <div className="container mx-auto p-6">
      
      {/* Welcome Text Animation */}
      <motion.h1
        className="text-4xl font-extrabold text-center mt-18 text-yellow-500 "
        initial="hidden"
        animate="visible"
        variants={duckAnimation}
      >
        {/* Welcome to DollarDucks Digital Marketing */}
      </motion.h1>

      {/* Duck Image Animation */}
      <div className="mt-10 text-center">
        <motion.img
          src={duckImage}
          alt="Duck Animation"
          className="w-30 mx-auto mb-8 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
        />
        <p className="text-lg text-gray-700 leading-relaxed font-bold">
          Be found by customers, beat competitors, and grow revenue with local SEO
        </p>
      </div>

      {/* Digital Marketing Info Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center text-yellow-600">
          Why Digital Marketing is Important?
        </h2>
        <p className="text-center text-gray-700 mt-4">
          Digital marketing is the key to reaching customers online. 
          It helps businesses connect with audiences, increase brand visibility, and drive more sales.
        </p>
      </div>

      {/* Local Search Grid */}
      <div className="mt-10 flex justify-center gap-8">
        <motion.div
          className="bg-yellow-400 text-white p-4 rounded-lg shadow-lg inline-block"
          animate={{ scale: [0.9, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h3 className="text-2xl font-bold">Avg. Rating</h3>
          <p className="text-2xl">{rating.toFixed(2)} ⭐️</p>
        </motion.div>

        <motion.div
          className="bg-green-400 text-white p-4 rounded-lg shadow-lg inline-block"
          animate={{ scale: [0.9, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h3 className="text-2xl font-bold">Total Calls</h3>
          <p className="text-2xl">{calls} 📞</p>
        </motion.div>
      </div>

      {/* Brands Marquee Animation */}
      <div className="mt-10 overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block text-2xl text-yellow-600 font-bold space-x-10"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {brands.map((brand, index) => (
            <span key={index} className="mx-8">{brand}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollPage;
