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
        <title>Best CR Sheets, HR Sheets & Chequered Sheets in Ghaziabad | MSS</title>
        <meta name="description" content="Browse the premium industrial steel catalog of Maruti Steel Syndicate (MSS Ghaziabad). Best steel sheet dealer in Ghaziabad supplying high-quality, authentic Cold Rolled, Hot Rolled, and anti-slip Chequered sheets." />
        <meta name="keywords" content="Best Steel Sheets in Ghaziabad, Best CR Sheet in Ghaziabad, Best HR Sheet in Ghaziabad, CR Sheet Dealer Ghaziabad, HR Sheet Dealer Ghaziabad, Chequered Sheet Dealer Ghaziabad, MSS Ghaziabad products" />
        <link rel="canonical" href="https://marutisteelsyndicate.com/products" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best CR Sheets, HR Sheets & Chequered Sheets in Ghaziabad | MSS" />
        <meta property="og:description" content="Browse the premium industrial steel catalog of Maruti Steel Syndicate (MSS Ghaziabad). Best wholesale rates for CR, HR, and Chequered Sheets." />
        <meta property="og:url" content="https://marutisteelsyndicate.com/products" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "CollectionPage",
                  "@id": "https://marutisteelsyndicate.com/products/#webpage",
                  "url": "https://marutisteelsyndicate.com/products",
                  "name": "CR Sheets, HR Sheets & Chequered Sheets | Maruti Steel Syndicate",
                  "description": "Premium industrial steel products catalog featuring Cold Rolled (CR) Sheets, Hot Rolled (HR) Sheets and Plates, and anti-slip Chequered Sheets.",
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
                        "name": "Products",
                        "item": "https://marutisteelsyndicate.com/products"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "ItemList",
                    "numberOfItems": 3,
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "url": "https://marutisteelsyndicate.com/products/cr-sheets",
                        "name": "Cold Rolled (CR) Sheets"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "url": "https://marutisteelsyndicate.com/products/hr-sheets",
                        "name": "Hot Rolled (HR) Sheets and Plates"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "url": "https://marutisteelsyndicate.com/products/chequered-sheets",
                        "name": "Chequered Sheets"
                      }
                    ]
                  }
                }
              ]
            }
          `}
        </script>
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
                  <img src={product.image} alt={`Best ${product.name} in Ghaziabad - Maruti Steel Syndicate`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
