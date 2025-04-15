import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DuckImage from "../assets/dao6.png";
import Automatedleaads1 from "../assets/Automatedleaads/slider1.png";
import Automatedleaads2 from "../assets/Automatedleaads/slider2.png";
import Automatedleaads3 from "../assets/Automatedleaads/slider3.png";
import Automatedleaads4 from "../assets/Automatedleaads/slider4.png";
import Automatedleaads5 from "../assets/Automatedleaads/slider5.png";
import Automatedleaads6 from "../assets/Automatedleaads/slider6.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Automatedleaads = () => {
  const navigate = useNavigate();
  // const images = [
  //   "https://images.pexels.com/photos/5598284/pexels-photo-5598284.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/8062358/pexels-photo-8062358.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // ];

  const Automatedleaads = [
    Automatedleaads1,
    Automatedleaads2,
    Automatedleaads3,
    Automatedleaads4,
    Automatedleaads5,
    Automatedleaads6,
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
        Stop Chasing Leads Like a Lost Duckling We’ll Bring Them to You!”
      </h1>

      {/* Image Slider & Description */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4">
        {/* Left Side - Image Slider */}
        <div className="w-full md:w-1/2 relative px-2 sm:px-0">
          <Slider {...settings}>
            {Automatedleaads.map((img, index) => (
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
            Ever feel like leads slip away faster than ducks in a pond? Not
            anymore! Our smart lead management system tracks, organizes, and
            automates follow-ups so you never miss a golden opportunity.
          </p>
          <ul className="list-disc list-inside mt-3 sm:mt-4 text-left text-base sm:text-lg space-y-2">
            <li className="mb-2 ">
              <strong> No More Lost Leads</strong> <br />
              Because a hot lead cools down faster than a duck drying off!
            </li>
            <li className="mb-2">
              <strong> More Conversions</strong> <br />
              No more “I forgot to reply” moments just more customers!
            </li>
            <li className="mb-2">
              <strong> More Sales </strong>
              <br /> Outperform competitors in your niche
            </li>
          </ul>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg">
            Let’s make sure every lead counts so you can focus on growing, not
            chasing!
          </p>
        </div>
      </div>

      {/* Duck Olivia Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 mt-8 sm:mt-12">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-2 sm:px-0 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Duck Kathy
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-left">
            Kathy’s motto? <strong>“No lead left behind!”</strong> She ensures{" "}
            <strong>
              every potential customer is tracked, nurtured, and converted
            </strong>{" "}
            so you can focus on
            <strong>closing deals, not chasing contacts.</strong>
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
            src="https://www.dollarducks.com/wp-content/uploads/2024/11/9.png"
            alt="Duck Olivia"
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

export default Automatedleaads;
