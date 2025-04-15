// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const Podcast = () => {
//   return (
//     <div className="container mx-auto p-6 mt-18">
//       <h2 className="text-2xl font-bold mb-6">
//         Previously on Adventures in Local Marketing
//       </h2>

//       <div className="space-y-6">
//         {podcastData.map((podcast, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-start"
//           >
//             <img
//               src={podcast.image}
//               alt={podcast.speaker}
//               className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold text-black">{podcast.title}</h3>
//               <p className="text-gray-500 text-sm">{podcast.date}</p>
//               <p className="mt-2 text-gray-700">{podcast.description}</p>
//               <div className="mt-3 flex items-center space-x-3 text-sm text-blue-600">
//                 <span>⏳ {podcast.duration}</span>
//                 <span>📌 {podcast.category}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const podcastData = [
//   {
//     speaker: "Neil Patel",
//     title: "Mastering SEO Strategies for 2025",
//     date: "March 10th, 2025",
//     description:
//       "In this episode, Neil Patel shares advanced SEO strategies, covering Google's latest algorithm updates and how to stay ahead.",
//     duration: "50 min listen",
//     category: "SEO",
//     image: "http://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     speaker: "Marie Forleo",
//     title: "How to Build a Million-Dollar Personal Brand",
//     date: "February 15th, 2025",
//     description:
//       "Marie breaks down the process of creating a personal brand that resonates with your audience and grows your business.",
//     duration: "55 min listen",
//     category: "Branding",
//     image: "https://plus.unsplash.com/premium_photo-1679079456068-2ddd4423aa14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Gary Vaynerchuk",
//     title: "Social Media Trends You Can’t Ignore",
//     date: "January 28th, 2025",
//     description:
//       "Gary Vee talks about emerging social media platforms, content strategies, and how to capture attention in 2025.",
//     duration: "42 min listen",
//     category: "Social Media",
//     image: "https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Rand Fishkin",
//     title: "The Future of Content Marketing",
//     date: "December 10th, 2024",
//     description:
//       "Rand shares insights on how content marketing is evolving, and what brands should focus on to stay competitive.",
//     duration: "48 min listen",
//     category: "Content Marketing",
//     image: "https://plus.unsplash.com/premium_photo-1680037567955-3d9fc98e1f50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Ann Handley",
//     title: "Crafting Compelling Content That Converts",
//     date: "November 5th, 2024",
//     description:
//       "Ann reveals how to tell better stories, write better copy, and use content as a powerful sales tool.",
//     duration: "45 min listen",
//     category: "Copywriting",
//     image: "https://plus.unsplash.com/premium_photo-1679079456625-6981df35fd18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Brian Dean",
//     title: "Link Building Techniques That Actually Work",
//     date: "October 1st, 2024",
//     description:
//       "In this episode, Brian Dean shares proven link-building strategies and common pitfalls to avoid.",
//     duration: "38 min listen",
//     category: "SEO",
//     image: "https://images.unsplash.com/photo-1526328828355-69b01701ca6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Jay Baer",
//     title: "Turning Customer Experience Into Marketing",
//     date: "September 12th, 2024",
//     description:
//       "Jay explains how businesses can use exceptional customer experiences as a form of organic marketing.",
//     duration: "43 min listen",
//     category: "Customer Experience",
//     image: "https://plus.unsplash.com/premium_photo-1663091687045-1c7b3ec5953c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Amy Porterfield",
//     title: "The Art of Email List Building",
//     date: "August 20th, 2024",
//     description:
//       "Amy dives deep into how to build and monetize an email list effectively without feeling salesy.",
//     duration: "40 min listen",
//     category: "Email Marketing",
//     image: "https://images.unsplash.com/photo-1554200876-980213841c94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     speaker: "Matt Diggity",
//     title: "Advanced Affiliate Marketing Strategies",
//     date: "July 15th, 2024",
//     description:
//       "Matt talks about scaling affiliate marketing businesses, niche selection, and leveraging SEO.",
//     duration: "44 min listen",
//     category: "Affiliate Marketing",
//     image: "https://images.unsplash.com/photo-1607805074620-5802aee47bdb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwb2RjYXN0fGVufDB8fDB8fHww",
//   },
//   {
//     speaker: "Pat Flynn",
//     title: "Passive Income Ideas That Actually Work",
//     date: "June 1st, 2024",
//     description:
//       "Pat shares his best passive income ideas and how you can build streams of revenue while you sleep.",
//     duration: "47 min listen",
//     category: "Entrepreneurship",
//     image: "https://images.unsplash.com/photo-1583127662686-c00fb903b78b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
//   },
// ];

// export default Podcast;



import React from 'react'

const Podcast = () => {
  return (
    <div className="flex items-center justify-center h-screen text-4xl font-bold">
    Coming Soon
  </div>
  )
}

export default Podcast