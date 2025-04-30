// import React from 'react';
// import { Link } from 'react-router-dom'; // ✅ Step 1

// // Import images
// import plumbingImg from '../assets/LocalBusinesses/plumbing.jpg';
// import hvacImg from '../assets/LocalBusinesses/hvac.jpg';
// import electricianImg from '../assets/LocalBusinesses/electrician.jpg';
// import roofingImg from '../assets/LocalBusinesses/roofing.jpg';
// import autoRepairImg from '../assets/LocalBusinesses/auto-repair.jpg';
// import restaurantImg from '../assets/LocalBusinesses/restaurant.jpg';

// const businesses = [
//   { id: 1, name: 'Plumbing Services', description: 'Fixing leaks and keeping the water flowing in homes and offices.', image: plumbingImg },
//   { id: 2, name: 'HVAC Contractors', description: 'Keeping homes cool in summer and warm in winter.', image: hvacImg },
//   { id: 3, name: 'Electricians', description: 'Wiring, repairs, and making sure the lights stay on.', image: electricianImg },
//   { id: 4, name: 'Roofing Companies', description: 'Protecting homes with strong, reliable roofs.', image: roofingImg },
//   { id: 5, name: 'Auto Repair Shops', description: 'Keeping cars running smoothly with expert maintenance.', image: autoRepairImg },
//   { id: 6, name: 'Restaurants & Cafés', description: 'Serving up delicious food and drinks for the community.', image: restaurantImg },
// ];

// const LocalBusinesses = () => {
//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-10">
//         Local Businesses
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {businesses.map((business) => (
//           <div 
//             key={business.id} 
//             className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300"
//           >
//             {/* ✅ Wrap image in Link */}
//             <Link to="/pricing">
//               <img 
//                 src={business.image} 
//                 alt={business.name} 
//                 className="w-full h-48 object-cover rounded-t-lg cursor-pointer" 
//               />
//             </Link>
//             <h3 className="text-lg font-bold mb-2 text-black mt-4">{business.name}</h3>
//             <p className="text-sm text-gray-600">{business.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LocalBusinesses;




import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import plumbingImg from '../assets/LocalBusinesses/plumber.jpeg';
import hvacImg from '../assets/LocalBusinesses/hvac.jpeg';
import electricianImg from '../assets/LocalBusinesses/electrician.webp';
import roofingImg from '../assets/LocalBusinesses/roofing.jpeg';
import autoRepairImg from '../assets/LocalBusinesses/auto-repair.jpg';
import restaurantImg from '../assets/LocalBusinesses/restaurant.jpg';

const businesses = [
  { id: 1, name: 'Plumbing Services', description: 'Fixing leaks and keeping the water flowing in homes and offices.', image: plumbingImg },
  { id: 2, name: 'HVAC Contractors', description: 'Keeping homes cool in summer and warm in winter.', image: hvacImg },
  { id: 3, name: 'Electricians', description: 'Wiring, repairs, and making sure the lights stay on.', image: electricianImg },
  { id: 4, name: 'Roofing Companies', description: 'Protecting homes with strong, reliable roofs.', image: roofingImg },
  { id: 5, name: 'Auto Repair Shops', description: 'Keeping cars running smoothly with expert maintenance.', image: autoRepairImg },
  { id: 6, name: 'Restaurants & Cafés', description: 'Serving up delicious food and drinks for the community.', image: restaurantImg },
];

const LocalBusinesses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-10">
        Local Businesses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {businesses.map((business) => (
          <Link 
            to="/pricing" 
            key={business.id} 
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300 block"
          >
            <img 
              src={business.image} 
              alt={business.name} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <h3 className="text-lg font-bold mb-2 text-black mt-4">{business.name}</h3>
            <p className="text-sm text-gray-600">{business.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocalBusinesses;
