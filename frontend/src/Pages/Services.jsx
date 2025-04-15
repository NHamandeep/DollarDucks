import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaGlobe,
  FaBullhorn,
  FaShoppingCart,
  FaEnvelope,
  FaUsers,
  FaBuilding,
  FaSearchDollar,
} from "react-icons/fa";

const services = [
  {
    title: "Lead Generation",
    description:
      "Get high-quality leads that convert using targeted strategies, smart analytics, and engaging content tailored for growth.",
    icon: <FaSearchDollar />,
  },
  {
    title: "Branding & Presence",
    description:
      "We ensure your brand stays consistent and strong across Google, Facebook, LinkedIn, and all key digital platforms.",
    icon: <FaGlobe />,
  },
  {
    title: "SEO & Paid Ads",
    description:
      "Rank higher on search engines and boost visibility with our expert SEO techniques and highly optimized paid ads.",
    icon: <FaChartLine />,
  },
  {
    title: "Social Media Management",
    description:
      "Engage your audience and build loyalty with strong content, timely posts, and professional profile management.",
    icon: <FaBullhorn />,
  },
  {
    title: "Client Targeting",
    description:
      "Reach the right customers through data-driven client lists tailored to match your ideal audience and business goals.",
    icon: <FaUsers />,
  },
  {
    title: "Email Campaigns",
    description:
      "Send powerful emails designed to convert with compelling messaging, strong CTAs, and strategic outreach sequences.",
    icon: <FaEnvelope />,
  },
  {
    title: "LinkedIn Growth",
    description:
      "Expand your professional network with 250+ personalized weekly requests and engaging brand-building messages.",
    icon: <FaBuilding />,
  },
  {
    title: "Custom Websites",
    description:
      "We design SEO-friendly, fully responsive custom websites crafted to deliver smooth UX and maximize conversions.",
    icon: <FaShoppingCart />,
  },
];

const Services = () => {
  return (
    // py-16 bg-gray-100 w-screen px-4 sm:px-6 lg:px-12
    <div className="container mx-auto sm:px-6 lg:px-12  px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mt-18">
          Our Digital Services to Grow Your Brand
        </h1>
        <p className="text-lg ">
          Unlock your brand's full potential with our expert digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white text-black p-8 rounded-lg shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col justify-between items-center text-center w-full h-[270px]"
          >
            <div className="text-4xl mb-4 text-yellow-500">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
