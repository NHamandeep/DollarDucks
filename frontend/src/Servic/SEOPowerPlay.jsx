import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DuckImage from "../assets/dao4.png";
import SEOPowerPlay1 from "../assets/SEOPowerPlay/slider1.png";
import SEOPowerPlay2 from "../assets/SEOPowerPlay/slider2.png";
import SEOPowerPlay3 from "../assets/SEOPowerPlay/slider3.png";
import SEOPowerPlay4 from "../assets/SEOPowerPlay/slider4.png";
import SEOPowerPlay5 from "../assets/SEOPowerPlay/slider5.png";
import SEOPowerPlay6 from "../assets/SEOPowerPlay/slider6.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SEOPowerPlay = () => {
  const navigate = useNavigate();
   const SEOPowerPlay = [
    SEOPowerPlay1,
    SEOPowerPlay2,
    SEOPowerPlay3,
    SEOPowerPlay4,
    SEOPowerPlay5,
    SEOPowerPlay6,
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
        Because Even Ducks Need to Rank #1!
      </h1>

      {/* Image Slider & Description */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4">
        {/* Left Side - Image Slider */}
        <div className="w-full md:w-1/2 relative px-2 sm:px-0">
          <Slider {...settings}>
            {SEOPowerPlay.map((img, index) => (
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
            If your website isn’t on page 1 of Google, it’s basically swimming
            in the deep, dark SEO abyss. 🦆🌊 We use proven SEO strategies to
            make sure your business gets found by the right people at the right
            time!
          </p>
          <ul className="list-disc list-inside mt-3 sm:mt-4 text-left text-base sm:text-lg space-y-2">
            <li className="mb-2">
              <strong> Higher Google Rankings </strong>
              <br />
              So you’re the first business customers find!
            </li>
            <li className="mb-2">
              <strong>More Free Traffic</strong>
              <br />
              Why pay for ads when you can get organic leads 24/7?
            </li>
            <li className="mb-2 ">
              <strong>Stronger Online Presence</strong>
              <br /> Be the top duck in your industry!
            </li>
          </ul>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-start">
            <strong>Let’s get your website ranking </strong>
            <br />
            because SEO is the breadcrumb trail to success!
          </p>
        </div>
      </div>

      {/* Duck Olivia Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 mt-8 sm:mt-12">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-2 sm:px-0 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Duck Ralph
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-start">
            Ralph <strong>lives for page-one rankings</strong>. With{" "}
            <strong>over a decade in SEO</strong>, he knows exactly how to get
            your business to{" "}
            <strong>the top of search results organically.</strong>
          </p>
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Connect with an Expert
            </h3>
            <button
              onClick={() => navigate("/BookaDemo")}
              className="bg-yellow-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow cursor-pointer hover:bg-yellow-600 transition duration-300  md:w-auto"
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-2">
          {/* <img
              src="https://duckdao.io/wp-content/uploads/2023/02/Duck4.svg"
              alt="Duck Ralph"
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-xl shadow-md"
              loading="lazy"
            /> */}

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
