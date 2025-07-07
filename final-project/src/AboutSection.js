import React from 'react';
import { ChefHat } from 'lucide-react';

const AboutSection = ({ onReserveClick }) => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Little Lemon was founded in 1995 by Mario and Adriana, two passionate chefs who wanted to bring the authentic flavors of the Mediterranean to Chicago. What started as a small family restaurant has grown into a beloved local institution.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Today, we continue to honor our roots while embracing innovation, creating dishes that celebrate both tradition and creativity. Every meal is prepared with love, using the finest ingredients and time-honored techniques.
            </p>
            <button
              onClick={onReserveClick}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200"
            >
              Book Your Experience
            </button>
          </div>
          <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <ChefHat className="w-24 h-24 text-yellow-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg font-medium">
                "Cooking is an art, and every dish tells a story."
              </p>
              <p className="text-gray-600 mt-2">- Chef Mario</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;