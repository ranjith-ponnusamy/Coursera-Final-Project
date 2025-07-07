import React from 'react';

const HeroSection = ({ onReserveClick }) => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Little Lemon
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Chicago
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button
            onClick={onReserveClick}
            className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;