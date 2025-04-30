// import React from 'react';
// import { motion } from 'framer-motion';

// // Local image imports
// import coffeeImg from '../assets/SmallBusinesses/coffee-shop.jpg';
// import handymanImg from '../assets/SmallBusinesses/handyman.jpg';
// import boutiqueImg from '../assets/SmallBusinesses/boutique.jpg';
// import trainerImg from '../assets/SmallBusinesses/trainer.jpg';
// import eventPlannerImg from '../assets/SmallBusinesses/event-planner.jpg';
// import petGroomerImg from '../assets/SmallBusinesses/pet-groomer.jpg';

// const businesses = [
//   {
//     id: 1,
//     name: 'Local Coffee Shop Owner',
//     description: 'Brewing success one cup at a time.',
//     image: coffeeImg,
//   },
//   {
//     id: 2,
//     name: 'Handyman Services',
//     description: 'Fixing, repairing, and making homes better.',
//     image: handymanImg,
//   },
//   {
//     id: 3,
//     name: 'Boutique Store Owner',
//     description: 'Bringing unique fashion and style to the community.',
//     image: boutiqueImg,
//   },
//   {
//     id: 4,
//     name: 'Personal Trainer',
//     description: 'Helping clients stay fit, healthy, and motivated.',
//     image: trainerImg,
//   },
//   {
//     id: 5,
//     name: 'Event Planner',
//     description: 'Creating unforgettable moments for special occasions.',
//     image: eventPlannerImg,
//   },
//   {
//     id: 6,
//     name: 'Pet Groomer',
//     description: 'Keeping furry friends looking and feeling their best.',
//     image: petGroomerImg,
//   },
// ];

// const SmallBusinesses = () => {
//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-10">
//         Small Business Showcase
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {businesses.map((business) => (
//           <motion.div 
//             key={business.id}
//             className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300"
//             whileHover={{ scale: 1.0 }}
//           >
//             <img src={business.image} alt={business.name} className="w-full h-48 object-cover rounded-md mb-4" />
//             <h3 className="text-lg font-bold mb-2 text-black">{business.name}</h3>
//             <p className="text-sm text-gray-600">{business.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SmallBusinesses;





import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Local image imports
import coffeeImg from '../assets/SmallBusinesses/coffee-shop.jpg';
import handymanImg from '../assets/SmallBusinesses/handyman.jpg';
import boutiqueImg from '../assets/SmallBusinesses/boutique.jpg';
import trainerImg from '../assets/SmallBusinesses/trainer.jpg';
import eventPlannerImg from '../assets/SmallBusinesses/event-planner.jpg';
import petGroomerImg from '../assets/SmallBusinesses/pet-groomer.jpg';

const businesses = [
  {
    id: 1,
    name: 'Local Coffee Shop Owner',
    description: 'Brewing success one cup at a time.',
    image: coffeeImg,
  },
  {
    id: 2,
    name: 'Handyman Services',
    description: 'Fixing, repairing, and making homes better.',
    image: handymanImg,
  },
  {
    id: 3,
    name: 'Boutique Store Owner',
    description: 'Bringing unique fashion and style to the community.',
    image: boutiqueImg,
  },
  {
    id: 4,
    name: 'Personal Trainer',
    description: 'Helping clients stay fit, healthy, and motivated.',
    image: trainerImg,
  },
  {
    id: 5,
    name: 'Event Planner',
    description: 'Creating unforgettable moments for special occasions.',
    image: eventPlannerImg,
  },
  {
    id: 6,
    name: 'Pet Groomer',
    description: 'Keeping furry friends looking and feeling their best.',
    image: petGroomerImg,
  },
];

const SmallBusinesses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-10">
        Small Business Showcase
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {businesses.map((business) => (
          <Link 
            to="/pricing" 
            key={business.id} 
            className="block"
          >
            <motion.div 
              className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.0 }}
            >
              <img src={business.image} alt={business.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold mb-2 text-black">{business.name}</h3>
              <p className="text-sm text-gray-600">{business.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmallBusinesses;
