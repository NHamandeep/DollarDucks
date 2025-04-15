import { useState, useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("loading");

    gsap.to(".dot", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      duration: 0.6,
    });

    gsap.to(".preloader", {
      y: "-100%",
      delay: 2.2,
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: () => {
        window.scrollTo(0, 0);
        document.body.classList.remove("loading");
        setLoading(false);
      },
    });

    return () => {
      document.body.classList.remove("loading");
      window.scrollTo(0, 0);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-[100] px-4">
      <img
        src={logo}
        alt="Logo"
        className="w-60 h-60 md:w-80 md:h-80 object-contain"
      />
      <div className="text-white text-lg md:text-2xl font-semibold mt-4 mb-2 text-center">
        Fueling Your Business Growth Online
      </div>
      <div className="flex items-center space-x-2 md:space-x-4 text-white text-4xl md:text-5xl font-bold">
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </div>
  );
};

export default Preloader;
