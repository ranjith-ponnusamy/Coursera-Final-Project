import React from 'react';
import { ChefHat, Star, Utensils, MapPin } from 'lucide-react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import LocationSection from './LocationSection';

const Home = ({ onReserveClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <HeroSection onReserveClick={onReserveClick} />
      <FeaturesSection />
      <AboutSection onReserveClick={onReserveClick} />
      <LocationSection onReserveClick={onReserveClick} />
    </div>
  );
};

export default Home;