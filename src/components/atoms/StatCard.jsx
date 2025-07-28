import React from 'react';

const StatCard = ({ icon: Icon, number, description }) => {
  return (
    <div className="text-center">
      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-orange-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StatCard;