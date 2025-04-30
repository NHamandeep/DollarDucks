import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import buy from "../assets/buy.png"


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const pricingPlans = {
  monthly: [
    {
      title: "Visibility & Local Search Optimization",
      price: 295,
      features: [
        "Google Business Profile Optimization",
        "Local SEO & Keyword Targeting",
        "Customer Reviews & Reputation Management",
        "NAP Consistency & Local Citations",
      ],
    },
    {
      title: "Social Media Growth & Engagement",
      price: 695,
      features: [
        "Content Strategy & Consistency",
        "Audience Interaction & Community Building",
        "Hashtag & SEO Optimization",
        "Analytics & Performance Tracking",
      ],
    },
    {
      title: "360° Digital Marketing Services",
      price: 995,
      features: [
        "Strategic Branding & Online Presence",
        "Multi-Channel Marketing & Advertising",
        "Data-Driven Optimization & Analytics",
        "Customer Engagement & Retention",
      ],
    },
  ],
  quarterly: [
    {
      title: "Visibility & Local Search Optimization",
      price: 395,
      features: [
        "Google Business Profile Optimization",
        "Local SEO & Keyword Targeting",
        "Customer Reviews & Reputation Management",
        "NAP Consistency & Local Citations",
      ],
    },
    {
      title: "Social Media Growth & Engagement",
      price: 995,
      features: [
        "Content Strategy & Consistency",
        "Audience Interaction & Community Building",
        "Hashtag & SEO Optimization",
        "Analytics & Performance Tracking",
      ],
    },
    {
      title: "360° Digital Marketing Services",
      price: 1495,
      features: [
        "Strategic Branding & Online Presence",
        "Multi-Channel Marketing & Advertising",
        "Data-Driven Optimization & Analytics",
        "Customer Engagement & Retention",
      ],
    },
  ],
};

const servicesPlans = [
  {
    title: "End-to-End Web Solutions",
    price: 795,
    features: [
      "Custom Web Design & Development",
      "UI/UX Optimization & Mobile Responsiveness",
      "Backend Development & Database Integration",
      "Website Security & Performance Enhancement",
    ],
  },
  {
    title: "Website Creation & Optimization",
    price: 1195,
    features: [
      "Custom Website Design & Development",
      "Performance & Speed Optimization",
      "SEO & Mobile Responsiveness",
      "Security & Maintenance Updates",
    ],
  },
];

const addonsPlans = [
  {
    title: "Logo & Branding Kit",
    features: [
      "Custom Logo Design",
      "Brand Color Palette",
      "Typography Guidelines",
      "Social Media Templates",
    ],
  },
  {
    title: "Holiday & Event Post",
    features: [
      "Seasonal Campaign Strategy",
      "Event-Based Promotions",
      "Festive Email Templates",
      "Performance Analytics & Insights",
    ],
  },
  {
    title: "Link Building Services",
    features: [
      "High-Quality Backlinks",
      "Guest Posting Outreach",
      "Broken Link Building",
      "Monthly Link Profile Report",
    ],
  },
];

const PlansPricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedTab, setSelectedTab] = useState("software");

  // const handlePayment = async (plan) => {
  //   const stripe = await stripePromise;
  
  //   try {
  //     const response = await fetch("https://dollarducks-backend-7n1l.onrender.com/api/payment/create-checkout-session", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: plan.title,
  //         price: plan.price,
  //       }),
  //     });
  
  //     const session = await response.json();
  
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });
  
  //     if (result.error) {
  //       console.error(result.error.message);
  //     }
  //   } catch (error) {
  //     console.error("Payment Error:", error);
  //   }
  // };
  
  

  const handlePayment = async (plan) => {
    const stripe = await stripePromise;
  
    try {
      const response = await fetch("https://dollarducks-backend-7n1l.onrender.com/api/payment/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: plan.title,
          price: plan.price,
        }),
      });
  
      const session = await response.json();
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };
  
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-15 md:mt-18">
        Flexible Plans & Pricing
      </h2>
      <p className="mt-2 text-center text-sm md:text-base">
        Designed for Plumbers, Roofers, Electricians, HVAC, Construction, Home Appliance Repair & More!
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center my-6">
        <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
          {["software", "services", "addons"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border rounded-lg transition ${
                selectedTab === tab ? "bg-black text-white shadow-lg" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {tab === "software" ? "Services" : tab === "services" ? "Website" : "Exclusive Freebie"}
            </button>
          ))}
        </div>

        {selectedTab === "software" && (
          <div className="flex space-x-2 mt-4 md:mt-0">
            {["monthly", "quarterly"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border rounded-lg transition ${
                  billingCycle === cycle ? "bg-black text-white shadow-lg" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {cycle === "monthly" ? "For Professionals" : "For Small Businesses"}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Pricing Cards */}
      {/* <div className="flex flex-wrap justify-center gap-6">
        {(selectedTab === "software"
          ? pricingPlans[billingCycle]
          : selectedTab === "services"
          ? servicesPlans
          : addonsPlans
        ).map((plan, i) => (
          <div
            key={i}
            className="p-6 bg-yellow-400 hover:bg-yellow-300 shadow-xl rounded-lg transform transition hover:scale-105 w-full md:w-80"
          >
            <h3 className="text-2xl font-bold text-black">{plan.title}</h3>
            <p className="text-3xl font-bold my-4 text-black">${plan.price}</p>

            {selectedTab === "addons" ? (
              <button
                onClick={() => window.open("https://buymeacoffee.com/dollarducks", "_blank")}
                className="mt-11 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-gray-900 cursor-pointer"
              >
                Buy me a coffee
              </button>
            ) : (
              <button
                onClick={() => handlePayment(plan)}
                className="mt-4 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-gray-900 cursor-pointer"
              >
                Start Your Free Trial
              </button>
            )}

            <ul className="mt-6 text-left space-y-3 text-black">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 min-w-[20px] min-h-[20px]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}


      {/* Pricing Cards */}
<div className="flex flex-wrap justify-center gap-6">
  {(selectedTab === "software"
    ? pricingPlans[billingCycle]
    : selectedTab === "services"
    ? servicesPlans
    : addonsPlans
  ).map((plan, i) => (
    <div
      key={i}
      className="p-6 bg-yellow-400 hover:bg-yellow-300 shadow-xl rounded-lg transform transition hover:scale-105 w-full md:w-80"
    >
      <h3 className="text-2xl font-bold text-black">{plan.title}</h3>
      
      {/* Price - $ symbol removed only for Exclusive Freebie */}
      <p className="text-3xl font-bold my-4 text-black">
        {selectedTab === "addons" ? "" : `$`}
        {plan.price}
      </p>

      {selectedTab === "addons" ? (
  <button
    onClick={() => window.open("https://buymeacoffee.com/dollarducks/membership", "_blank")}
    className="mt-11 px-6 py-3 bg-white rounded-lg w-full cursor-pointer flex justify-center items-center"
  >
    <img
      src={buy} // image path yahin sahi hona chahiye
      alt="Buy me a coffee"
      className="h-8 w-auto max-w-full"
    />
  </button>
): (
        <button
          onClick={() => handlePayment(plan)}
           className="mt-4 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-gray-900 cursor-pointer"
        >
          Get Started
        </button>
      )}

      <ul className="mt-6 text-left space-y-3 text-black">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <IoIosArrowDroprightCircle className="text-black min-w-[20px] min-h-[20px]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

    </div>
  );
};

export default PlansPricing;
