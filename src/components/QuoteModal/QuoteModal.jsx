import React, { useState, useEffect } from 'react';
import { X, User, Phone, Package, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './QuoteModal.module.css';

const QuoteModal = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    quantity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state when closing
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', number: '', quantity: '' });
        setError('');
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      full_name: formData.name,
      phone: formData.number,
      product_name: productName,
      message: `QUANTITY REQUIRED: ${formData.quantity || 'Not specified'}\n\nInquiry for: ${productName}`,
      email: 'null',
      company: 'null',
      subject: 'Quote Request',
      time: new Date().toLocaleString()
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSuccess(true);
      setIsSubmitting(false);
      // Auto close after 2.5 seconds
      setTimeout(() => {
        onClose();
      }, 2500);
    }, (err) => {
      console.log('FAILED...', err);
      setError('Failed to send request. Please try again.');
      setIsSubmitting(false);
    });
  };

  if (!isOpen && !isSuccess) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ''}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        {!isSuccess ? (
          <>
            <div className={styles.modalHeader}>
              <h2>Get Best Price</h2>
              <p>Inquiry for: <strong>{productName}</strong></p>
            </div>

            <form className={styles.quoteForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label><User size={16} /> Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className={styles.inputGroup}>
                <label><Phone size={16} /> Contact Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your mobile number" 
                  required 
                  value={formData.number}
                  onChange={(e) => setFormData({...formData, number: e.target.value})}
                />
              </div>

              <div className={styles.inputGroup}>
                <label><Package size={16} /> Quantity (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. 50 Tons, 100 Sheets" 
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                />
              </div>

              {error && <p className={styles.errorMessage}>{error}</p>}

              <button 
                type="submit" 
                className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Request Quote <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={80} className={styles.successIcon} />
            </div>
            <h2>Thank You!</h2>
            <p>Your request for <strong>{productName}</strong> has been received. Our team will contact you shortly with the best pricing.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
