import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import styles from './Navbar.module.css';
import { companyDetails } from '../../data/data';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we are at the top
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.navContent}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt={companyDetails.name} />
            </Link>

            <a href={`https://wa.me/${companyDetails.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.mobileWhatsapp}>
              <MessageCircle size={18} /> <span>WhatsApp</span>
            </a>

            <div className={styles.navLinks}>
              <Link to="/" className={location.pathname === '/' ? styles.activeLink : ''}>Home</Link>
              <Link to="/about" className={location.pathname === '/about' ? styles.activeLink : ''}>About Us</Link>
              <Link to="/products" className={location.pathname.includes('/products') ? styles.activeLink : ''}>Products</Link>
              <Link to="/contact" className={location.pathname === '/contact' ? styles.activeLink : ''}>Contact</Link>
              <a href={`https://wa.me/${companyDetails.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
