import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hvacImage from "../assets/HVAC.png"
import SolarImage from "../assets/Solar.png"
import RoofingImage from "../assets/Roofing.png"
import ConstructionImage from "../assets/Construction.png"
import PlumbingImage from "../assets/Plumbing.png"
import HomeImage from "../assets/Home.png"

const FrontSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className="w-3 h-3 bg-white rounded-full cursor-pointer hover:bg-yellow-400 transition"
      ></div>
    ),
    
  };

  const slides = [
    {
       img: hvacImage,
      title: "HVAC - R",
      desc: "Struggling to get HVAC leads? Digital marketing is the key!",
      longDesc: `Customers search online first when they need heating, cooling, or refrigeration services. If your business isn’t visible, you’re losing leads to competitors. With <span>SEO</span>, <span>Google My Business</span>, and <span>targeted ads</span>, you can increase calls, bookings, and brand trust. Don’t miss out—get your <span>HVAC-R</span> business seen and grow faster.`,
    },
    {
      img: SolarImage,
      title: "Solar & Electrical",
      desc: "Grow Your Electric & Solar Business with Digital Marketing!",
      longDesc: `Customers search online first for electrical and solar services. If your business isn’t visible, you’re losing leads to competitors. With <span>SEO</span>, <span>Google My Business</span>, and <span>targeted ads</span>, you can increase calls, bookings, and brand trust. Don’t miss out—get your <span>electric and solar</span> business seen and grow faster.`,
    },
    {
      img: RoofingImage,
      title: "Roofing and Remodeling",
      desc: "Get More Leads for Your Roofing & Remodeling Business!",
      longDesc: `Homeowners search online first for roofing and remodeling services. If your business isn’t showing up, you’re losing leads to competitors. With <span>SEO</span>, <span>Google My Business</span>, and <span>targeted ads</span>, you can increase calls, bookings, and brand trust. Don’t miss out—grow your <span>roofing and remodeling</span> business today!`,
    },
    {
      img: ConstructionImage,
      title: "Construction & Concrete",
      desc: "Get More Leads for Your Construction & Concrete Business!",
      longDesc: `Property owners and developers search online first for construction and concrete services. If your business isn’t visible, you’re losing leads to competitors. With <span>SEO</span>, <span>Google My Business</span>, and <span>targeted ads</span>, you can increase visibility, get more calls, and land more projects. Don’t miss out—grow your <span>construction and concrete</span> business today!`,
    },
    {
      img: PlumbingImage,
      title: "Plumbing and Hauling",
      desc: "Get More Leads for Your Plumbing & Hauling Business!",
      longDesc: `Customers search online first for plumbing and hauling services. If your business isn’t visible, you’re losing leads to competitors. With <span>SEO</span>, <span>Google My Business</span>, and <span>targeted ads</span>, you can increase visibility, get more calls, and book more jobs. Don’t miss out—grow your <span>plumbing and hauling</span> business today!`,
    },
    {
      img: HomeImage,
      title: "Home Appliance Repair",
      desc: "Get More Leads for Your Home Appliance Repair Business!",
      longDesc: `Customers search online first when they need home appliance repair services. If your business isn’t visible, you’re losing leads to competitors. With <span>SEO</span>, <span>Google My Business</span>, and <span>targeted ads</span>, you can increase visibility, get more calls, and book more repairs. Don’t miss out—grow your <span>appliance repair</span> business today!`,
    },
  ];

  return (
    <div className="relative w-full h-[90vh] md:h-screen mx-auto mt-12">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[90vh] md:h-screen object-cover"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-yellow-500 text-3xl md:text-6xl lg:text-8xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-white text-base md:text-lg lg:text-xl mb-4 max-w-2xl">
                {slide.desc}
              </p>

              <p
                className="text-white text-sm md:text-lg lg:text-xl mb-6 max-w-3xl leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: slide.longDesc.replace(/<span>(.*?)<\/span>/g, `<span class="text-yellow-400 font-semibold">$1</span>`),
                }}
              />

              <a
                href="BookaDemo"
                className="bg-yellow-500 text-black font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full hover:bg-yellow-400 transition duration-300 text-sm md:text-base"
              >
                Book a Call
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-yellow-500 transition"
        onClick={() => sliderRef.current.slickNext()}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default FrontSlider;

