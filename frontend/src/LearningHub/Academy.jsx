import React from "react";
import { FaBook, FaSearch, FaTools, FaVideo, FaPodcast } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Academy = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "All Insights",
      description:
        "Explore comprehensive insights and trends in the marketing world.",
      icon: <FaBook />,
    },
    {
      title: "Research",
      description:
        "Dive into our latest research findings and industry reports.",
      icon: <FaSearch />,
    },
    {
      title: "Resources",
      description:
        "Access top review and citation sites to boost your marketing efforts.",
      icon: <FaTools />,
    },
    {
      title: "Webinars",
      description: "Join expert-led webinars to enhance your marketing skills.",
      icon: <FaVideo />,
    },
    {
      title: "Podcast",
      description:
        "Listen to conversations with industry leaders and marketing experts.",
      icon: <FaPodcast />,
    },
    {
      title: "Case Studies",
      description:
        "Discover real-world examples and success stories from our clients.",
      icon: <FaBook />,
    },
    {
      title: "Guides",
      description:
        "Follow step-by-step guides to master various marketing techniques.",
      icon: <FaSearch />,
    },
    {
      title: "Templates",
      description:
        "Download free marketing templates to streamline your campaigns.",
      icon: <FaTools />,
    },
    {
      title: "Reports",
      description:
        "Get detailed industry reports and insights to stay ahead of the curve.",
      icon: <FaVideo />,
    },
    // {
    //   title: "Tutorials",
    //   description: "Learn how to use our tools effectively with comprehensive tutorials.",
    //   icon: <FaPodcast />,
    // },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-8 mt-18">
        <h1 className="text-4xl font-bold ">Welcome to the Learning Hub</h1>
        <p className="text-lg  mt-2">
          Your go-to resource for all things marketing. Explore insights,
          guides, and tools to elevate your strategies.
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-3xl mr-4">
                {category.icon}
              </div>
              <h2 className="text-xl font-semibold text-black">
                {category.title}
              </h2>
            </div>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}

      <div className="text-center mt-12 p-8 border-2 border-yellow-300 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build a Customized Software Solution?
        </h2>
        <p className=" mb-6 max-w-2xl mx-auto">
          Let’s turn your vision into reality. Get expert guidance and a
          custom-built software solution designed for your business needs.
        </p>
        <button
          onClick={() => navigate("/BookaDemo")}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default Academy;
