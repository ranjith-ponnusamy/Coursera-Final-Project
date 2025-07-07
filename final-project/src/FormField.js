import React from 'react';

const FormField = ({ 
  label, 
  icon, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder, 
  required = false,
  min,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {icon}
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;