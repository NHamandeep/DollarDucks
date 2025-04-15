import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import meta from '../assets/meta.png';
import shopify from '../assets/shopify.jpeg';
import ClutchTopAgencyAward from '../assets/Clutch Top Agency Award.png';
import SEMrushAgencyPartner from '../assets/SEMrush Agency Partner.png';
import GoodFirms from '../assets/GoodFirms.jpg';

const DemoInfo = () => {
  return (
    <div className="flex-1 flex flex-col justify-center p-6 md:p-12 text-left mt-5">
      {/* Heading - larger on desktop, smaller on mobile */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-5">
        Book Your Personalized Demo
      </h1>

      {/* Subheading - slightly smaller on mobile */}
      <p className="text-base md:text-lg mb-6">
        Discover how Dollar Ducks can help your business soar.
      </p>

      {/* Benefits list - stack vertically on all devices */}
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="hidden md:inline mr-2">•</span>
          Schedule a call with our experts to dive deep into your business
          goals.
        </p>
        <p className="flex items-start">
          <span className="hidden md:inline mr-2">•</span>
          Experience a tailored demo focused on your specific growth
          opportunities.
        </p>
        <p className="flex items-start">
          <span className="hidden md:inline mr-2">•</span>
          Learn how our SEO, Social Media, Website Development, and Google Ads
          services can drive real results.
        </p>
      </div>

      {/* Trusted partners section - full width on mobile, auto width on desktop */}
      <h3 className="text-lg md:text-xl font-semibold mt-6 md:mt-6">
        Trusted & Certified by Leading Platforms & Awards
      </h3>
      <div className="flex flex-wrap mt-4 md:mt-6 gap-4 md:gap-6 justify-center items-center">
        <img
          src={meta}
          alt="Meta Business Partner"
          className="h-20 md:h-30" // Smaller on mobile
        />
        <img
          src={shopify}
          alt="Shopify Partner"
          className="h-20"
        />
        <img
          src={ClutchTopAgencyAward}
          alt="Clutch Top Agency Award"
          className="h-20"
        />
        <img
          src={SEMrushAgencyPartner}
          alt="SEMrush Agency Partner"
          className="h-20"
        />
        <img
          src={GoodFirms}
          alt="GoodFirms"
          className="h-20"
        />
      </div>
    </div>
  );
};

const DemoForm = ({ formData, setFormData, handleSubmit, isSubmitted }) => {
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-around items-center min-h-screen">
      {isSubmitted ? (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-md text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white border text-black border-black shadow-xl   rounded-lg p-4 md:p-8 w-screen max-w-xs sm:max-w-sm mx-4 transition-all duration-300 ease-in-out transform hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
          {/* Form title - smaller on mobile */}
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 text-center">
            Please enter your details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            {/* Form inputs - smaller padding on mobile */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            />
            <input
              type="text"
              name="Business Name"
              placeholder="Business Name"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
              list="business-name-suggestions"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            />
            <input
              type="tel" // Changed from "phone number" to "tel" for better mobile support
              name="Number"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            />
            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            >
              <option value="" disabled selected>
                I have a...
              </option>
              <option value="HVAC">HVAC</option>
              <option value="Solar">Solar</option>
              <option value="Electrical">Electrical</option>
              <option value="Roofing">Roofing</option>
              <option value="Remodeling">Remodeling</option>
              <option value="Construction">Construction</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Concrete">Concrete</option>
              <option value="Hauling">Hauling</option>
              <option value="Home Appliance Repair">
                Home Appliance Repair
              </option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600 transition text-sm md:text-base cursor-pointer"
            >
              Schedule My Call
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const BookaDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      businessName: e.target["Business Name"].value,
      email: e.target.email.value,
      number: e.target.Number.value,
      service: e.target.service.value,
    };

    console.log("Form Data Before Sending:", formData);

    try {
      // http://localhost:5000/api/form
      // const response = await fetch("https://dollarducks-backend.onrender.com", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // https://dollarducks-backend.onrender.com/api/form
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        setIsSubmitted(true);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    // Container - stacks vertically on mobile, flex row on desktop
    <div className="flex flex-col md:flex-row bg-light-yellow border-black p-4 md:p-8 justify-around items-center md:items-stretch">
      {/* Info section - full width on mobile, half on desktop */}
      <DemoInfo />

      {/* Form section - full width on mobile, half on desktop */}
      <DemoForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />
    </div>
  );
};

export default BookaDemo;
