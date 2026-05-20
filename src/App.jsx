import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import Contact from './pages/Contact/Contact';
import Loader from './components/Loader/Loader';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Use requestAnimationFrame to ensure the DOM is ready before scrolling
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [loading]);

  return (
    <div className="fade-in">
      {loading && <Loader />}
      <div className={loading ? 'hidden-app' : ''}>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  );
}

export default App;
