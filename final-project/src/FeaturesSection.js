import React from 'react';
import { ChefHat, Star, Utensils } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-yellow-500" />,
      title: "Authentic Mediterranean",
      description: "Fresh ingredients and traditional recipes passed down through generations"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Award-Winning Chef",
      description: "Experience culinary excellence with our Michelin-starred chef"
    },
    {
      icon: <Utensils className="w-8 h-8 text-yellow-500" />,
      title: "Farm-to-Table",
      description: "Locally sourced ingredients ensuring the freshest flavors"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Little Lemon?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what makes our restaurant special and why families have been coming here for generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;