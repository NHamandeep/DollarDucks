import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import CouponPopup from "./Components/CouponPopup";
import ScrollToTop from "./Components/ ScrollToTop";
import Navbar from "./Components/Navbar";
// import SignIn from "./Components/SignIn";
import NewUser from "./Components/NewUser";
import Home from "./Pages/Home";
import NewsletterSubscription from "./Pages/NewsletterSubscription";
import Pricing from "./Pages/Cancel";
import Success from "./Pages/Success";
import BookaDemo from "./Components/BookaDemo";
import Footer from "./Components/Footer";
import WhoWeServe from "./Pages/WhoWeServe";
import LocalBusinesses from "./WhoWeServe/LocalBusinesses";
import Services from "./Pages/Services";
import LeadForm from "./chatbot/LeadForm";
import SmallBusinesses from "./WhoWeServe/SmallBusinesses";
import ProfessionalBusinesses from "./WhoWeServe/ProfessionalBusinesses";
import News from "./LearningHub/News"
import Podcast from "./LearningHub/Podcast";
import DollarDucksAcademy from "./LearningHub/DollarDucksAcademy";

import Academy from "./LearningHub/Academy";
import FrontSlider from "./Components/frontslider";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AboutUS from "./Pages/AboutUS";
import ChatBubble from "./chatbot/ChatBubble";
import Chatbot from "./chatbot/Chatbot";
import ProLevelWebsite from "./Servic/ProLevelWebsite";
import MetaGoogleAds from "./Servic/MetaGoogleAds";
import SEOPowerPlay from "./Servic/SEOPowerPlay";
import AutomatedLeadManagement from "./Servic/AutomatedLeadManagement";
import NeighborhoodSEO from "./Servic/NeighborhoodSEO";
import GrowthFocusedAddOns from "./Servic/GrowthFocusedAddOns";

function App() {
  const location = useLocation();
  const hideFooterPaths = [
    "/signup",
    "/login",
    "/software",
    "/track-local-rankings",
    "/listings-management",
  ];

  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  // const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    const chatTimer = setTimeout(() => {
      setIsChatOpen(true);
    }, 20000);

    // const couponTimer = setTimeout(() => {
    //   setShowCoupon(true);
    // }, 5000); // Show coupon after preloader

    return () => clearTimeout(chatTimer);
    clearTimeout(couponTimer);
  }, []);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  return (
    <div>
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/signup/newuser" element={<NewUser />} />
        <Route path="/contact-us" element={<LeadForm />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/bookademo" element={<BookaDemo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whoWeServe" element={<WhoWeServe />} />
        <Route path="/newsletterSubscription" element={<NewsletterSubscription />} />
        <Route path="/local-businesses" element={<LocalBusinesses />} />
        <Route path="/professionals-experts" element={<ProfessionalBusinesses />} />
        <Route path="/small-business-champions" element={<SmallBusinesses />} />
        <Route
          path="/professional-businesses"
          element={<ProfessionalBusinesses />}
        />
        <Route path="/news" element={<News />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/DollarDucks-academy" element={<DollarDucksAcademy />} />
        <Route path="/frontslider" element={<FrontSlider />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/pro-level-website" element={<ProLevelWebsite />} />
        <Route path="/meta-google-ads" element={<MetaGoogleAds />} />
        <Route path="/seo-power-play" element={<SEOPowerPlay />} />
        <Route path="/automated-lead-management" element={<AutomatedLeadManagement />} />
        <Route path="/neighborhood-seo" element={<NeighborhoodSEO />} />
        <Route path="/growth-focused-add-ons" element={<GrowthFocusedAddOns />} />
      </Routes>

      {/* Conditional Footer Rendering */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}

      {/* Coupon Popup */}
      {/* {showCoupon && <CouponPopup onClose={() => setShowCoupon(false)} />} */}

      {/* Chatbot Components */}
      <ChatBubble toggleChat={toggleChat} />
      <Chatbot isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );
}

export default App;
