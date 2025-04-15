import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DuckImage from "../assets/dao3.png";
import GrowthFocusedAddOns1 from "../assets/GrowthFocusedAddOns/slider1.png";
import GrowthFocusedAddOns2 from "../assets/GrowthFocusedAddOns/slider2.png";
import GrowthFocusedAddOns3 from "../assets/GrowthFocusedAddOns/slider3.png";
import GrowthFocusedAddOns4 from "../assets/GrowthFocusedAddOns/slider4.png";
import GrowthFocusedAddOns5 from "../assets/GrowthFocusedAddOns/slider5.png";
import GrowthFocusedAddOns6 from "../assets/GrowthFocusedAddOns/slider6.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GrowthFocusedAddOns = () => {
  const navigate = useNavigate();
  // const images = [
  //   "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/4050437/pexels-photo-4050437.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/7663143/pexels-photo-7663143.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // ];

    const GrowthFocusedAddOns = [
      GrowthFocusedAddOns1,
      GrowthFocusedAddOns2,
      GrowthFocusedAddOns3,
      GrowthFocusedAddOns4,
      GrowthFocusedAddOns5,
      GrowthFocusedAddOns6,
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
        Everything Your Business Needs, Minus the Quacking!
      </h1>

      {/* Image Slider & Description */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4">
        {/* Left Side - Image Slider */}
        <div className="w-full md:w-1/2 relative px-2 sm:px-0">
          <Slider {...settings}>
            {GrowthFocusedAddOns.map((img, index) => (
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
          <p className="text-lg font-semibold">
            We don’t just stop at websites, ads, and SEO—we do it all! Whether
            you need social media management, email marketing, branding, or even
            AI automation, we’ve got the ultimate digital toolbox for your
            business.
          </p>
          <ul className="list-disc list-inside mt-4 text-start text-lg">
            <li>
              <strong>Engaging Social Media </strong> <br />
              Because a quiet business is a forgotten business!
            </li>
            <li>
              {" "}
              <strong> Smart Email Marketing </strong> <br />
              Stay in touch and keep customers coming back!
            </li>
            <li>
              <strong>Branding That Stands Out</strong> <br /> Be memorable, be
              unique, be un-duck-gettable!
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Whatever your business needs we’ve got you covered. Let’s make your
            brand fly!
          </p>
        </div>
      </div>

      {/* Duck Olivia Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 mt-8 sm:mt-12">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-2 sm:px-0 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold ">
            Duck James – The Captain of Dollar Ducks
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-left">
            James isn’t just the <strong>Founder & CEO of Dollar Ducks</strong>
            —he’s the brain behind the brand and the strategy guru helping
            businesses quack their way to success!
          </p>
          <p className="mt-3  text-lg text-left">
            With a deep passion for{" "}
            <strong>
              digital marketing, AI automation, and business growth,
            </strong>{" "}
            James has built Dollar Ducks into a go-to agency for businesses that
            want real results, not just empty promises.
          </p>
          <p className="mt-3 text-lg text-left">
            From high-converting websites to SEO dominance and lead generation,
            he ensures that every strategy is
            <strong>smart, data-driven, and built for profit.</strong>
          </p>
          <p className="mt-3  text-lg text-left">
            If you’re looking to{" "}
            <strong>
              level up your business and leave your competitors in the pond,
            </strong>
            James and the Dollar Ducks team are ready to{" "}
            <strong>make waves!</strong>
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
            src="https://www.dollarducks.com/wp-content/uploads/2024/11/11.png"
            alt="Duck James"
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

export default GrowthFocusedAddOns;
