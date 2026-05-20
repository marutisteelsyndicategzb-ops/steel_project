import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Code } from 'lucide-react';
import styles from './Footer.module.css';
import { companyDetails, products } from '../../data/data';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.companyInfo}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt={companyDetails.name} />
            </Link>
            <p className={styles.description}>
              Founded by <strong>{companyDetails.founder}</strong>, we are a premier industrial steel supplier specialized in High-Grade Cold Rolled and Hot Rolled sheets.
            </p>
            <div className={styles.socialLinks}>
              {/* Social links placeholder */}
            </div>
          </div>

          <div className={styles.linksSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3>Products</h3>
            <ul>
              {products.map(product => (
                <li key={product.id}>
                  <Link to={`/products/${product.slug}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3>Get In Touch</h3>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>{companyDetails.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>{companyDetails.email}</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>{companyDetails.address}</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>{companyDetails.address2}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>
            <p>&copy; {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
            <p className={styles.gstin}>GSTIN: {companyDetails.gstin}</p>
          </div>

        </div>

        <div className={styles.developerCreditContainer}>
          <div className={styles.developerCredit}>
            <span>Designed & Developed by</span>
            <a href="https://hello-world-rosy-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.helloworldBadge}>
              Helloworld <Code size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
