import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;