import React from 'react';
import { CheckCircle } from 'lucide-react';

const BookingConfirmation = ({ formData }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center py-8">
        <CheckCircle className="mx-auto w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          Thank you, {formData.name}! Your table reservation for {formData.guests} guests 
          on {formData.date} at {formData.time} has been confirmed.
        </p>
        <p className="text-sm text-gray-500">
          You'll receive a confirmation email shortly at {formData.email}
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;