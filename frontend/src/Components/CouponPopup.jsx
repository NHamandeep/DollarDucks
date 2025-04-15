import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const CouponPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-2xl p-6 w-96 text-center relative shadow-xl"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-yellow-500 font-bold ">
          <X size={20} />
        </button>
        <div className="text-lg font-bold flex justify-center items-center gap-2">
          ✨ Offer For Our First 100 Customers✨
        </div>
        <p className="text-sm text-gray-600 mt-2">Celebrate this festival with exciting discounts!</p>
        <p className="mt-4 text-gray-800">Get Flat 25% OFF on all courses!</p>
        <div className="border-dashed border-2 border-gray-400 rounded-md p-3 mt-4 text-lg font-bold tracking-widest bg-gray-100">
          DUCK25
        </div>
        <button
          onClick={() => window.location.href = "/redeem"} // Change URL as needed
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Redeem Now
        </button>
      </motion.div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowPopup(true), 1000); // Show popup after 1 sec
    }, 3000); // Simulating preloader delay
  }, []);

  return (
    <div>
    <CouponPopup show={showPopup} onClose={() => setShowPopup(false)} />
  </div>
  
  );
};

export default App;
