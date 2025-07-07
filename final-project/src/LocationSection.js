import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = ({ onReserveClick }) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600">
            Find us in the heart of Chicago's vibrant dining scene
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-yellow-500 mr-2" />
              Location & Hours
            </h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>Address:</strong> 123 Mediterranean Ave, Chicago, IL 60601</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> info@littlelemon.com</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">Hours:</p>
                <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ready to Dine?
            </h3>
            <p className="text-gray-600 mb-6">
              Reserve your table today and experience the magic of Little Lemon. Whether it's a romantic dinner, family celebration, or business meeting, we'll make it memorable.
            </p>
            <button
              onClick={onReserveClick}
              className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200"
            >
              Make Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;