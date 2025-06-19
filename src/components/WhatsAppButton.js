import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '8142200317'; // Replace with your WhatsApp number
  const message = 'Hi! I am interested in your courses. Can you provide more information?';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton; 