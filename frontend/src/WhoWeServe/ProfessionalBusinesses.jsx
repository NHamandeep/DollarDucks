import React from 'react';

// Import local images
import tattooImg from '../assets/ProfessionalsExperts/tattoo-artist.jpg';
import financialImg from '../assets/ProfessionalsExperts//financial.jpg';
import legalImg from '../assets/ProfessionalsExperts/legal.jpg';
import realEstateImg from '../assets/ProfessionalsExperts/real-estate.jpg';
import salonImg from '../assets/ProfessionalsExperts/salon.jpg';
import therapistImg from '../assets/ProfessionalsExperts/therapist.jpg';

const professionals = [
  { 
    id: 1, 
    name: 'Tattoo Artist', 
    description: 'Creating unique, permanent art that tells a story.', 
    image: tattooImg 
  },
  { 
    id: 2, 
    name: 'Financial Consultant', 
    description: 'Guiding businesses and individuals to manage money wisely.', 
    image: financialImg 
  },
  { 
    id: 3, 
    name: 'Legal Advisor', 
    description: 'Providing expert legal guidance and ensuring compliance.', 
    image: legalImg 
  },
  { 
    id: 4, 
    name: 'Real Estate Agent', 
    description: 'Helping clients buy, sell, and invest in properties.', 
    image: realEstateImg 
  },
  { 
    id: 5, 
    name: 'Salon Specialist', 
    description: 'Transforming looks with hair, beauty, and skincare services.', 
    image: salonImg 
  },
  { 
    id: 6, 
    name: 'ABA Therapist', 
    description: 'Supporting individuals with behavioral therapy and skill-building.', 
    image: therapistImg 
  },
];

const ProfessionalsExperts = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-10">
        Professionals & Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {professionals.map((professional) => (
          <div 
            key={professional.id} 
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img src={professional.image} alt={professional.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold mb-2 text-black">{professional.name}</h3>
            <p className="text-sm text-gray-600">{professional.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsExperts;
