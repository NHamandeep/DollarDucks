// import React from 'react';
// import logo from "../assets/logo3.png";


// const News = () => {
//   return (
//     <div className="p-6 container mx-auto  mt-18">
//       {/* Header Section */}
//       <header className="flex justify-between items-center pb-6 border-b border-gray-300">
//         <h1 className="text-2xl font-bold">Local SEO News</h1>
//         <input
//           type="text"
//           placeholder="Search for..."
//           className="p-2 border rounded-lg"
//         />
//       </header>

//       {/* Navigation Buttons */}
//       <nav className="flex gap-6 py-4 border-b border-gray-300">
//         {['All', 'News', 'Learn', 'Research', 'Resources', 'Webinars', 'Podcast', 'Academy'].map((item) => (
//           <a href={`#${item.toLowerCase()}`} key={item} className="text-yellow-500 hover:underline">
//             {item}
//           </a>
//         ))}
//       </nav>

//       {/* Tags Section */}
//       <div className="flex gap-4 my-4 text-black">
//         {['Local SEO', 'Google Business Profile', 'Citations & Listings', 'Multi-location', 'Reviews', 'Agencies'].map((tag) => (
//           <button key={tag} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* News Articles */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
//         {[
//           {
//             title: 'Expert Predictions for Local Marketing in 2025',
//             author: 'Jamie Banks',
//             date: 'January 23rd, 2025',
//             readTime: '24 min read',
//             image: '',
//           },
//           {
//             title: 'New Academy Course: How to Create a Winning Local SEO Strategy for Any Business',
//             author: 'Kate Herbert-Smith',
//             date: 'December 11th, 2024',
//             readTime: '2 min read',
//             image: '/images/news2.jpg',
//           },
//           {
//             title: "Facebook's Gen Z Comeback? Why Local Businesses Should Care About the New Redesign",
//             author: 'Jenny Bernard',
//             date: 'October 31st, 2024',
//             readTime: '5 min read',
//             image: '/images/news3.jpg',
//           },
//           {
//             title: 'New Policies & Shady Review Schemes: Is Google Helping or Hurting?',
//             author: 'Sam Knight',
//             date: 'September 19th, 2024',
//             readTime: '10 min read',
//             image: '/images/news4.jpg',
//           },
//           {
//             title: 'New: Citation Builder Launching in 10 New Countries',
//             author: 'Mike Hawkes',
//             date: 'September 5th, 2024',
//             readTime: '2 min read',
//             image: '/images/news5.jpg',
//           },
//         ].map((news, index) => (
//           <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
//             <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-md mb-4" />
//             <h2 className="text-xl font-bold">{news.title}</h2>
//             <p className="text-gray-600">by {news.author}</p>
//             <p className="text-gray-400 text-sm">{news.date} • {news.readTime}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;




import React from 'react';

const News = () => {
  return (
    <div className="flex items-center justify-center h-screen text-4xl font-bold">
      Coming Soon
    </div>
  );
};

export default News;
