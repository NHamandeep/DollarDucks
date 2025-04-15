  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom"; // Assuming you're using react-router
  
  const Webinars = () => {
    // Array of webinar objects
    const webinarsData = [
      {
        id: 1,
        title: "Mastering Local SEO in 2025",
        date: new Date("March 29, 2025 09:00:00"),
        description: "Learn the latest strategies for dominating local search rankings.",
      },
      {
        id: 2,
        title: "Local SEO Review Strategies",
        date: new Date("April 15, 2025 10:00:00"),
        description: "How to get more reviews and manage them effectively.",
      },
      {
        id: 3,
        title: "Google Business Profile Optimization",
        date: new Date("May 10, 2025 11:00:00"),
        description: "Get ahead with GBP optimization tips & tricks.",
      },
      {
        id: 4,
        title: "Advanced SEO Automation Techniques",
        date: new Date("June 5, 2025 12:00:00"),
        description: "Explore the tools and techniques to automate your SEO tasks.",
      },
    ];
  
    // Find the next upcoming webinar
    const getNextWebinar = () => {
      const now = new Date().getTime();
      return webinarsData.find((webinar) => webinar.date.getTime() > now) || null;
    };
  
    const [nextWebinar, setNextWebinar] = useState(getNextWebinar());
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextWebinar?.date));
  
    function calculateTimeLeft(date) {
      if (!date) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      const now = new Date().getTime();
      const difference = date.getTime() - now;
  
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(nextWebinar?.date);
        setTimeLeft(updatedTimeLeft);
  
        // If the date has passed, update to the next upcoming one
        if (
          updatedTimeLeft.days === 0 &&
          updatedTimeLeft.hours === 0 &&
          updatedTimeLeft.minutes === 0 &&
          updatedTimeLeft.seconds === 0
        ) {
          const newNext = getNextWebinar();
          setNextWebinar(newNext);
          setTimeLeft(calculateTimeLeft(newNext?.date));
        }
      }, 1000);
  
      return () => clearInterval(timer);
    }, [nextWebinar]);
  
    return (
      <div className="container mx-auto p-6 mt-10">
        <nav className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Local SEO Webinars</h1>
          <input type="text" placeholder="Search..." className="border p-2 rounded" />
        </nav>
  
        {/* Next Webinar Countdown */}
        <div className="text-center my-6">
          <h2 className="text-3xl font-bold">Our Next Webinar</h2>
          {nextWebinar ? (
            <>
              <p className="text-xl font-semibold mb-2">
                {nextWebinar.date.toDateString()} | {nextWebinar.date.toLocaleTimeString()}
              </p>
              <p className="text-2xl font-semibold">
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
              </p>
            </>
          ) : (
            <p className="text-lg font-semibold text-red-500">No upcoming webinars.</p>
          )}
        </div>
  
        {/* Webinar Detail Card */}
        {nextWebinar && (
          <div className="p-6 shadow-lg max-w-4xl mx-auto border rounded mb-10">
            <h3 className="text-2xl font-bold">{nextWebinar.title}</h3>
            <p className="text-gray-600">📅 {nextWebinar.date.toDateString()} | ⏰ {nextWebinar.date.toLocaleTimeString()}</p>
            <p className="mt-2">{nextWebinar.description}</p>
            <div className="mt-4">
            <h4 className="font-semibold">Our Guest Experts</h4>
            <div className="flex space-x-4 mt-2">
              <div className="p-4 border rounded-lg">
                <p className="font-bold">Julian Hooks</p>
                <p className="text-gray-500">Asurion</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-bold">Mike Blumenthal</p>
                <p className="text-gray-500">Near Media</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-bold">Greg Sterling</p>
                <p className="text-gray-500">Near Media</p>
              </div>
            </div>
          </div>

            <button
              onClick={() => (window.location.href = "/signup")}
              className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        )}
  
        {/* Extra Upcoming Webinars Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webinarsData.map((webinar) => (
              <div key={webinar.id} className="border rounded-lg p-4 shadow">
                <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                <p className="text-gray-500 mb-2">
                  📅 {webinar.date.toDateString()} | ⏰ {webinar.date.toLocaleTimeString()}
                </p>
                <p className="mb-4">{webinar.description}</p>
                <div className="mt-4">
            <h4 className="font-semibold">Our Guest Experts</h4>
            <div className="flex space-x-4 mt-2">
              <div className="p-4 border rounded-lg">
                <p className="font-bold">Julian Hooks</p>
                <p className="text-gray-500">Asurion</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-bold">Mike Blumenthal</p>
                <p className="text-gray-500">Near Media</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-bold">Greg Sterling</p>
                <p className="text-gray-500">Near Media</p>
              </div>
            </div>
          </div>
                <Link
                  to={`/webinar/${webinar.id}`}
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/all-webinars"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Webinars;
  

