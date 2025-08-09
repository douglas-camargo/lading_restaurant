import React from 'react';

const ContactInfo = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-orange-100 rounded-full p-3">
        <Icon className="h-6 w-6 text-orange-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
