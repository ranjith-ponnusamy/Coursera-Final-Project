import React from 'react';

const Navigation = ({ currentPage, navigateToHome, navigateToReservation }) => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            onClick={navigateToHome}
            className="text-2xl font-bold text-yellow-600 cursor-pointer hover:text-yellow-700 transition-colors duration-200"
          >
            Little Lemon
          </div>
          <div className="flex space-x-6">
            <button
              onClick={navigateToHome}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                currentPage === 'home' 
                  ? 'bg-yellow-500 text-white' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={navigateToReservation}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                currentPage === 'booking' 
                  ? 'bg-yellow-500 text-white' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;