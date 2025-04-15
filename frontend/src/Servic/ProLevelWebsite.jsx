import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DuckImage from "../assets/dao2.png";
import ProLevelWebsite1 from "../assets/prolevelwebsite/slider1.png";
import ProLevelWebsite2 from "../assets/prolevelwebsite/slider2.png";
import ProLevelWebsite3 from "../assets/prolevelwebsite/slider3.png";
import ProLevelWebsite4 from "../assets/prolevelwebsite/slider4.png";
import ProLevelWebsite5 from "../assets/prolevelwebsite/slider5.png";
import ProLevelWebsite6 from "../assets/prolevelwebsite/slider6.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

const SEOPowerPlay = () => {
  const navigate = useNavigate();
  // const images = [
  //   "https://cdn.dribbble.com/userupload/42691293/file/original-78a8aba0355268d0106dff372e758bdc.jpg?resize=2048x1536&vertical=center",
  //   "https://cdn.dribbble.com/userupload/42695130/file/original-a657ef0e75f3b25a7c1b754f6804420d.jpg?resize=2048x1536&vertical=center",
  //   "https://cdn.dribbble.com/userupload/42684064/file/original-e4ed60fd2a30b71288dc565a0e9094e8.png?resize=2048x1536&vertical=center",
  //   "https://cdn.dribbble.com/userupload/42695470/file/original-2574b24b3666de7204fb052805e4c49e.jpeg?resize=2048x1536&vertical=center",
  //   "https://cdn.dribbble.com/userupload/42684379/file/original-9ef679254fcfeb9db986b22d7517262f.png?resize=2048x1479&vertical=center",
  //   "https://cdn.dribbble.com/userupload/42672789/file/original-4d6b2912ab771a1a141cbd7fb3ff06b9.jpg?resize=2048x1536&vertical=center",
  // ];

  const prolevelwebsite = [
    ProLevelWebsite1,
    ProLevelWebsite2,
    ProLevelWebsite3,
    ProLevelWebsite4,
    ProLevelWebsite5,
    ProLevelWebsite6,
  ];
  

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-white text-black p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
      aria-label="Previous slide"
    >
      <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-white text-black p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
      aria-label="Next slide"
    >
      <ChevronRight size={20} className="sm:w-6 sm:h-6" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay interval (3 seconds)
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-15 sm:mt-12 mb-6 sm:mb-8 px-2">
        Your Business Deserves More Than a{" "}
        <span className="text-yellow-500">Quacking</span> Template!
      </h1>

      {/* Image Slider & Description */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4">
        {/* Left Side - Image Slider */}
        <div className="w-full md:w-1/2 relative px-2 sm:px-0">
          <Slider {...settings}>
            {prolevelwebsite.map((img, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-1"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-0">
          <p className="text-base sm:text-lg">
            Think of your website like a duck in a pond. Would you rather be the
            sleek, fast, and eye-catching duck that glides effortlessly, or the
            one stuck paddling in circles with a clunky, outdated site?
          </p>
          <p className="text-base sm:text-lg mt-3 sm:mt-4">
            At <strong>Dollar Ducks</strong>, we build high-performance, custom
            websites that{" "}
            <strong>
              load fast, look amazing, and convert visitors into paying
              customers.
            </strong>
          </p>
          <ul className="list-disc list-inside mt-3 sm:mt-4 text-left text-base sm:text-lg space-y-2">
            <li className="mb-2">
              <strong>Higher Google Rankings </strong> <br /> Be the first
              business customers find!
            </li>
            <li className="mb-2">
              <strong>More Free Traffic</strong>
              <br />
              Get organic leads 24/7 without paying for ads.
            </li>
            <li className="mb-2">
              <strong>Stronger Online Presence</strong>
              <br />
              Stay ahead of competitors.
            </li>
          </ul>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg">
            Let's get your website ranking—because{" "}
            <strong>SEO is the breadcrumb trail to success!</strong>
          </p>
        </div>
      </div>

      {/* Duck Jason Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 mt-8 sm:mt-12">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-2 sm:px-0 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {" "}
            Duck Jason
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-left">
            If websites were race cars,{" "}
            <strong>
              Jason would be the pit crew, engineer, and driver all in one!
            </strong>
            With <strong>8+ years of experience</strong>, he builds
            <strong> fast, high-converting</strong> websites that actually work
            for your business.
          </p>
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Connect with an Expert
            </h3>
            <button
              onClick={() => navigate("/BookaDemo")}
              className="bg-yellow-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow cursor-pointer hover:bg-yellow-600 transition duration-300 md:w-auto"
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-2">
          <img
            src={DuckImage}
            alt="Duck Jason"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-xl shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SEOPowerPlay;
