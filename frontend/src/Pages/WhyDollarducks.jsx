import React, { useEffect } from "react";
import { gsap } from "gsap";
import duckImage1 from "../assets/duck1.png"; // Replace with your image paths
import duckImage2 from "../assets/duck2.png";
import duckImage3 from "../assets/duck3.png";
// Add more images as needed

const WhyDollarDucks = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(".feature-1 img", { rotation: -10, x: -20 }, { rotation: 10, x: 20, yoyo: true, repeat: -1, duration: 2 });
    gsap.fromTo(".feature-2 img", { rotation: 0, y: -20 }, { rotation: 360, y: 20, yoyo: true, repeat: -1, duration: 3 });
    gsap.fromTo(".feature-3 img", { scale: 0.8 }, { scale: 1, yoyo: true, repeat: -1, duration: 1.5 });
    // Add more unique animations as needed
    gsap.fromTo(".feature-4 img", { x: -20 }, { x: 20, yoyo: true, repeat: -1, duration: 2 });
    gsap.fromTo(".feature-5 img", { y: -20 }, { y: 20, yoyo: true, repeat: -1, duration: 2.5 });
    gsap.fromTo(".feature-6 img", { rotation: 10, y: 20 }, { rotation: -10, y: -20, yoyo: true, repeat: -1, duration: 2 });
    gsap.fromTo(".feature-7 img", { x: 20 }, { x: -20, yoyo: true, repeat: -1, duration: 1.8 });
    gsap.fromTo(".feature-8 img", { y: 20 }, { y: -20, yoyo: true, repeat: -1, duration: 2.2 });
    gsap.fromTo(".feature-9 img", { rotation: -5, x: 10 }, { rotation: 5, x: -10, yoyo: true, repeat: -1, duration: 2 });
  }, []);

  const features = [
    { title: "Simple", description: "DollarDucks is so simple you already know how to use it.", image: duckImage1, className: "feature-1" },
    { title: "Private", description: "DollarDucks messages are heavily encrypted and can self-destruct.", image: duckImage2, className: "feature-2" },
    { title: "Synced", description: "DollarDucks lets you access your chats from multiple devices.", image: duckImage3, className: "feature-3" },
    { title: "Fast", description: "DollarDucks delivers messages faster than any other application.", image: duckImage1, className: "feature-4" },
    { title: "Powerful", description: "DollarDucks has no limits on the size of your media and chats.", image: duckImage2, className: "feature-5" },
    { title: "Open", description: "DollarDucks has an open API and source code free for everyone.", image: duckImage3, className: "feature-6" },
    { title: "Secure", description: "DollarDucks keeps your messages safe from hacker attacks.", image: duckImage1, className: "feature-7" },
    { title: "Social", description: "DollarDucks groups can hold up to 200,000 members.", image: duckImage2, className: "feature-8" },
    { title: "Expressive", description: "DollarDucks lets you completely customize your messenger.", image: duckImage3, className: "feature-9" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white p-6 text-center">
      <h1 className="text-4xl font-bold text-black-500 mb-8">Why DollarDucks?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className={`feature ${feature.className} transform transition-transform duration-500 hover:scale-105`}>
            <img src={feature.image} alt={feature.title} className="mx-auto mb-4 w-32 h-32 object-contain" />
            <h2 className="text-2xl font-bold text-yellow-600">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDollarDucks;
