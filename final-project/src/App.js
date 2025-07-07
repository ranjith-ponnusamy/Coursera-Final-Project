import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Home from './Home';
import BookingForm from './BookingForm';
import Footer from './Footer';
import './App.css'; // Assuming you have some global styles

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToReservation = () => {
    setCurrentPage('booking');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        {/* Dynamic title based on current page */}
        <title>
          {currentPage === 'home' 
            ? 'Little Lemon Restaurant - Fresh Mediterranean Cuisine' 
            : 'Book a Table - Little Lemon Restaurant'
          }
        </title>
        
        {/* Dynamic description based on current page */}
        <meta name="description" content={
          currentPage === 'home' 
            ? 'Little Lemon - Fresh Mediterranean cuisine with locally sourced ingredients. Experience authentic flavors in a cozy atmosphere.' 
            : 'Reserve your table at Little Lemon Restaurant. Book now for an unforgettable Mediterranean dining experience.'
        } />
        
        {/* Basic Meta Tags */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="restaurant, Mediterranean food, fresh ingredients, Little Lemon, dining, local cuisine, reservation, booking" />
        <meta name="author" content="Little Lemon Restaurant" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={
          currentPage === 'home' 
            ? 'Little Lemon Restaurant - Fresh Mediterranean Cuisine' 
            : 'Book a Table - Little Lemon Restaurant'
        } />
        <meta property="og:description" content={
          currentPage === 'home' 
            ? 'Experience authentic Mediterranean flavors with fresh, locally sourced ingredients at Little Lemon Restaurant.' 
            : 'Reserve your table at Little Lemon Restaurant for an unforgettable Mediterranean dining experience.'
        } />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/images/little-lemon-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Little Lemon Restaurant" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={
          currentPage === 'home' 
            ? 'Little Lemon Restaurant - Fresh Mediterranean Cuisine' 
            : 'Book a Table - Little Lemon Restaurant'
        } />
        <meta name="twitter:description" content={
          currentPage === 'home' 
            ? 'Experience authentic Mediterranean flavors with fresh, locally sourced ingredients.' 
            : 'Reserve your table for an unforgettable Mediterranean dining experience.'
        } />
        <meta name="twitter:image" content="https://yourdomain.com/images/little-lemon-twitter-image.jpg" />
        
        {/* Restaurant-Specific Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Your City" />
        <meta name="geo.position" content="latitude;longitude" />
        <meta name="ICBM" content="latitude, longitude" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#F4CE14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Little Lemon" />
      </Helmet>

      <Navigation 
        currentPage={currentPage}
        navigateToHome={navigateToHome}
        navigateToReservation={navigateToReservation}
      />
      
      <main>
        {currentPage === 'home' && <Home onReserveClick={navigateToReservation} />}
        {currentPage === 'booking' && (
          <div className="py-12">
            <BookingForm />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;