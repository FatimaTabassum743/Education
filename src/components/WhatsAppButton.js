import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ 
  phoneNumber = '8142200317', 
  message = 'Hi! I am interested in your courses. Can you provide more information?',
  className = "fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50",
  iconSize = "h-6 w-6",
  showText = false,
  buttonText = "Ask on WhatsApp"
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={iconSize} />
      {showText && <span className="ml-2 font-medium">{buttonText}</span>}
    </a>
  );
};

export default WhatsAppButton; 