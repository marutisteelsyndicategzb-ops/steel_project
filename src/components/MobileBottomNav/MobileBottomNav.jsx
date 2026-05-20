import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Package, MessageSquare, Phone } from 'lucide-react';
import styles from './MobileBottomNav.module.css';
import { companyDetails } from '../../data/data';

const MobileBottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
        <Home size={18} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
        <Info size={18} />
        <span>About</span>
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => `${styles.productsBtn} ${isActive ? styles.active : ''}`}>
        <div className={styles.circle}>
          <Package size={20} />
        </div>
        <span>Products</span>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
        <MessageSquare size={18} />
        <span>Inquiry</span>
      </NavLink>
      <a href={`tel:${companyDetails.phone}`}>
        <Phone size={18} />
        <span>Call</span>
      </a>
    </nav>
  );
};

export default MobileBottomNav;
