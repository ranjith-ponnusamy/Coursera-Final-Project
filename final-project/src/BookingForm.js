import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle } from 'lucide-react';
import BookingConfirmation from './BookingConfirmation';
import FormField from './FormField';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available time slots
  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Date Night', 'Business Dinner', 
    'Family Gathering', 'Celebration', 'Other'
  ];

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests) newErrors.guests = 'Number of guests is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Booking submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          occasion: '',
          requests: ''
        });
      }, 3000);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      occasion: '',
      requests: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <BookingConfirmation formData={formData} />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Little Lemon</h1>
        <p className="text-gray-600">Reserve your table for an unforgettable dining experience</p>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Full Name"
            icon={<User className="inline w-4 h-4 mr-1" />}
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Enter your full name"
            required
          />

          <FormField
            label="Email Address"
            icon={<Mail className="inline w-4 h-4 mr-1" />}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
            required
          />
        </div>

        <FormField
          label="Phone Number"
          icon={<Phone className="inline w-4 h-4 mr-1" />}
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Enter your phone number"
          required
        />

        {/* Booking Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            label="Date"
            icon={<Calendar className="inline w-4 h-4 mr-1" />}
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            min={today}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline w-4 h-4 mr-1" />
              Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                errors.time ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline w-4 h-4 mr-1" />
              Guests *
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                errors.guests ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
            {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests}</p>}
          </div>
        </div>

        {/* Occasion */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Occasion (Optional)
          </label>
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Select occasion</option>
            {occasions.map(occasion => (
              <option key={occasion} value={occasion}>{occasion}</option>
            ))}
          </select>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Any dietary restrictions, seating preferences, or special requests..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
          >
            Reserve Table
          </button>
          <button
            onClick={resetForm}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600 text-center">
          <strong>Note:</strong> Reservations are held for 15 minutes past the booking time. 
          For parties of 8 or more, please call us directly at (555) 123-4567.
        </p>
      </div>
    </div>
  );
};

export default BookingForm;