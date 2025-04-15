import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
const WhoWeServe = () => {
  const navigate = useNavigate(); 
  const services = [
    {
      title: "Roofing",
      description:
        "Boost local visibility with targeted SEO and digital marketing strategies.",
      image:
        "https://images.pexels.com/photos/16055407/pexels-photo-16055407/free-photo-of-people-sitting-on-a-bench-in-front-of-a-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "HVAC Services",
      description:
        "Build trust and engage with potential customers on  Instagram.",
      image:
        "https://images.pexels.com/photos/5691536/pexels-photo-5691536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Plumbing",
      description:
        "Generate quality leads with PPC campaigns and engaging social media outreach.",
      image:
        "https://images.pexels.com/photos/16442684/pexels-photo-16442684/free-photo-of-water-protection-pros-poland-coat-aquaproof-vision-fabric-lightweight-waterproof-and-flexible-fitted-with-reflective-tapes-to-increase-worker-visibility-knee-length-visibility-class-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Electrical ",
      description:
        "Grow customer trust with personalized email marketing and informative blogs.",
      image:
        "https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Flooring ",
      description:
        "Display positive customer reviews and success stories prominently.",
      image:
        "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Windows",
      description:
        "Enhance visibility and engagement with customized digital marketing campaigns.",
      image:
        "https://images.pexels.com/photos/5691537/pexels-photo-5691537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Gardening",
      description:
        "Showcase your landscaping expertise and attract more clients effortlessly.",
      image:
        "https://images.pexels.com/photos/31255153/pexels-photo-31255153/free-photo-of-charming-potted-garden-with-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Pest Control",
      description:
        "Promote pest control services effectively with lead-focused marketing strategies.",
      image:
        "https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Renovations",
      description:
        "Position your brand as the go-to solution for renovation and maintenance projects.",
      image:
        "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Landscaping",
      description:
        "Expand your client base with creative digital tailored for landscapers.",
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];
  


  const [showAll, setShowAll] = useState(false);

  return (
    // py-16 bg-gray-100 w-screen px-4 sm:px-6 lg:px-12
    <div className=" container mx-auto p-6 sm:px-6 lg:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center  mb-10 mt-18"
      >
        Industries We Serve
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
        {(showAll ? services : services.slice(0, 5)).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center w-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 mb-4 rounded-lg object-cover"
            />
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {service.number}
            </div>
            <h3 className="text-2xl font-semibold text-[#333333] mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-[#555555] text-center bg-yellow-100 p-2 rounded-md">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all"
          >
            Show More
          </button>
        </div>
      )}

      <div className="text-center mt-12 p-8 border-2  border-yellow-300 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build a Customized Software Solution?
        </h2>
        <p className=" mb-6 max-w-2xl mx-auto">
          Let’s turn your vision into reality. Get expert guidance and a
          custom-built software solution designed for your business needs.
        </p>
        <button
          onClick={() => navigate("/BookaDemo")}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default WhoWeServe;
