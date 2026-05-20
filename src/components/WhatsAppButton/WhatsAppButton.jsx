import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';
import { companyDetails } from '../../data/data';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.whatsappBtn}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={30} fill="white" />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
