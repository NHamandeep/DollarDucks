

import { useState } from "react";


const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // "https://dollarducks-backend.onrender.com/api/subscription/subscribe"
      const response = await fetch("https://dollarducks-backend-zxxg.onrender.com/api/subscription/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg flex flex-col md:flex-row items-center md:items-center justify-between max-w-2xl mx-auto border border-black shadow-md">
      {/* Left Section */}
      <div className="text-black md:w-3/5">
        <h2 className="text-lg font-bold">Sign Up for Updates</h2>
        <p className="text-xs mt-1">Get the latest marketing insights in your inbox every month.</p>

        <form className="mt-2 space-y-2" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold p-2 rounded-md hover:bg-yellow-600 border border-black text-sm"
          >
            Subscribe
          </button>
        </form>
        
{message && <p className="text-sm text-green-600 mt-2">{message}</p>}
        <p className="text-xs mt-1 flex items-center">
          <span className="text-sm">🔒</span> We respect your privacy. 
          {/* <a href="/privacy-policy" className="underline ml-1">Privacy Policy</a>  */}
        </p>
      </div>

      {/* Right Section (Clickable - Redirects to Instagram) */}
      <a 
        href="https://www.instagram.com/dollar_ducks/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="md:w-2/5 flex flex-col items-center md:ml-4 mt-3 md:mt-0 cursor-pointer"
      >
        <div className="bg-yellow-500 p-3 rounded-lg text-black text-center font-bold text-sm border border-black w-full">
          THE LOCAL PACK <br />
          <span className="text-xs font-normal">Join 5,000+ marketers</span>
        </div>
      </a>
    </div>
  );
};

export default NewsletterSubscription;



