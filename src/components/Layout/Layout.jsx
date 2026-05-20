import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MobileBottomNav from '../MobileBottomNav/MobileBottomNav';
import Chatbot from '../Chatbot/Chatbot';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
      <Chatbot />
    </div>
  );
};

export default Layout;
