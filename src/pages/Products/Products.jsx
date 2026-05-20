import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight } from 'lucide-react';
import styles from './Products.module.css';
import { products } from '../../data/data';

const Products = () => {
  return (
    <div className={styles.productsPage}>
      <Helmet>
        <title>Industrial Steel Products | CR Sheets, HR Sheets, Chequered Sheets | Ghaziabad</title>
        <meta name="description" content="Explore Maruti Steel Syndicate's premium steel catalog featuring CR Sheets, HR Sheets, and Chequered Sheets. Wholesale steel supplier in NCR and North India." />
        <meta name="keywords" content="Steel Products Ghaziabad, Buy CR Sheets NCR, Buy HR Sheets Loha Mandi, Chequered Sheets North India, Industrial Steel Distributor" />
        <link rel="canonical" href="https://marutisteelsyndicate.com/products" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Industrial Steel Products | Maruti Steel Syndicate" />
        <meta property="og:description" content="Explore Maruti Steel Syndicate's premium steel catalog featuring CR Sheets, HR Sheets, and Chequered Sheets." />
        <meta property="og:url" content="https://marutisteelsyndicate.com/products" />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Product Categories</h1>
          <p>Explore our high-performance steel solutions tailored for industrial excellence.</p>
        </div>
      </section>

      <section className={`section ${styles.productGridSection}`}>
        <div className="container">
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <img src={product.image} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div className={styles.productCardContent}>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <div className={styles.specsPreview}>
                    {product.specifications.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className={styles.specItem}>
                        <strong>{spec.label}:</strong> {spec.value}
                      </div>
                    ))}
                  </div>
                  <div className={styles.metricsRow}>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Cost Base</span>
                      <span className={styles.metricValue}>{product.costBase}</span>
                    </div>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Tons Supplied</span>
                      <span className={styles.metricValue}>{product.tonsSupplied}</span>
                    </div>
                  </div>
                  <Link to={`/products/${product.slug}`} className="btn btn-primary w-full">
                    View Full Details <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need a Custom Solution?</h2>
            <p>Our technical team can help you find the exact steel grade and specification for your project.</p>
            <Link to="/contact" className="btn btn-primary">
              Speak with an Expert <ArrowRight size={18} style={{marginLeft: '8px'}} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
