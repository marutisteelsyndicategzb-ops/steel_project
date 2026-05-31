import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { companyDetails } from '../../data/data';
import logo from '../../assets/logo.png';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    subject: 'Product Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
      product_name: 'General Inquiry',
      // Format the message to include quantity if provided
      message: `Quantity Required: ${formData.quantity || 'Not specified'}\n\nMessage: ${formData.message}`
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
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company: '',
        quantity: '',
        subject: 'Product Inquiry',
        message: ''
      });
    }, (err) => {
      console.log('FAILED...', err);
      setError('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    });
  };

  return (
    <div className={styles.contactPage}>
      <Helmet>
        <title>Contact Maruti Steel Syndicate | Steel Sheet Dealer in Ghaziabad (MSS)</title>
        <meta name="description" content="Contact Maruti Steel Syndicate (MSS Ghaziabad), the best steel sheet dealer in Ghaziabad, for bulk quotes on CR sheets, HR sheets, and Chequered sheets. Visit our Head Office in Loha Mandi or Call +91 90215 54396." />
        <meta name="keywords" content="Contact Maruti Steel Syndicate, MSS Ghaziabad Contact, Steel Supplier Phone Number Ghaziabad, Loha Mandi Steel Quotes, Buy CR Sheets NCR, Buy HR Sheets North India, steel sheet dealer Ghaziabad" />
        <link rel="canonical" href="https://marutisteelsyndicate.com/contact" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Maruti Steel Syndicate | Steel Sheet Dealer in Ghaziabad (MSS)" />
        <meta property="og:description" content="Contact Maruti Steel Syndicate (MSS Ghaziabad) for premium industrial steel sheets bulk pricing and customized shearing quotes." />
        <meta property="og:url" content="https://marutisteelsyndicate.com/contact" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ContactPage",
                  "@id": "https://marutisteelsyndicate.com/contact/#webpage",
                  "url": "https://marutisteelsyndicate.com/contact",
                  "name": "Contact Maruti Steel Syndicate",
                  "description": "Contact details and bulk pricing inquiry form for Maruti Steel Syndicate (MSS Ghaziabad), the premier steel sheet dealer in Ghaziabad.",
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://marutisteelsyndicate.com/"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contact Us",
                        "item": "https://marutisteelsyndicate.com/contact"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "LocalBusiness",
                    "@id": "https://marutisteelsyndicate.com/#localbusiness",
                    "name": "Maruti Steel Syndicate",
                    "alternateName": ["MSS", "MSS Ghaziabad"],
                    "telephone": "+919021554396",
                    "email": "marutisteelsyndicategzb@gmail.com",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "76 & 24, Loha Mandi, Bulandshahr Road Industrial Area",
                      "addressLocality": "Ghaziabad",
                      "addressRegion": "Uttar Pradesh",
                      "postalCode": "201009",
                      "addressCountry": "IN"
                    }
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We're here to help you with your industrial steel requirements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Contact <span className="highlight">Details</span></h2>
              <p>Fill out the form or use our contact information to reach out to our team.</p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Phone size={24} /></div>
                  <div>
                    <h4>Phone Number</h4>
                    <p>{companyDetails.phone}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Mail size={24} /></div>
                  <div>
                    <h4>Email Address</h4>
                    <p>{companyDetails.email}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><MapPin size={24} /></div>
                  <div>
                    <h4>Office Address</h4>
                    <p style={{ marginBottom: '0.5rem' }}>{companyDetails.address}</p>
                    <p>{companyDetails.address2}</p>
                    <a 
                      href="https://maps.app.goo.gl/uRauDjiwAgDvQ16w7?g_st=iwb" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.locationBtn}
                    >
                      <MapPin size={16} /> Head Office Location
                    </a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><ShieldCheck size={24} /></div>
                  <div>
                    <h4>GSTIN</h4>
                    <p>{companyDetails.gstin}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><LinkedinIcon size={24} /></div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/company/maruti-steel-syndicate/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.whatsappCta}>
                <h3>Quick Inquiry via WhatsApp</h3>
                <p>Chat with our sales representatives directly.</p>
                <a href={`https://wa.me/${companyDetails.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <MessageCircle size={20} /> Chat Now
                </a>
              </div>
            </div>

            <div className={styles.formContainer}>
              {isSuccess ? (
                <div className={styles.successMessage}>
                  <CheckCircle2 size={60} className={styles.successIcon} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button className="btn btn-primary" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        name="full_name"
                        placeholder="John Doe" 
                        required 
                        value={formData.full_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="john@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+91 00000 00000" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Your Company Ltd." 
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="General Question">General Question</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Quantity (Optional)</label>
                      <input 
                        type="text" 
                        name="quantity"
                        placeholder="e.g. 50 Tons" 
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Your Message</label>
                    <textarea 
                      name="message"
                      placeholder="Describe your requirement in detail..." 
                      rows="6" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} style={{marginLeft: '10px'}} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.46231908678!2d77.45047917615967!3d28.64584728362609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefda18df93b5%3A0xe90b46e7062eb83e!2sMARUTI%20STEEL%20SYNDICATE%20%7C%20Trusted%20iron%20and%20steel%20HR%20and%20CR%20coils%20and%20sheet%20distributor%20and%20retailer%20in%20Ghaziabad%20%7C!5e0!3m2!1sen!2sin!4v1715694215570!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maruti Steel Syndicate Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
