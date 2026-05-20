import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Download, FileText, ChevronRight, Tag, IndianRupee, Package } from 'lucide-react';
import styles from './ProductDetail.module.css';
import { products, companyDetails } from '../../data/data';
import QuoteModal from '../../components/QuoteModal/QuoteModal';

const ProductDetail = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/" />;
  }

  const otherProducts = products.filter(p => p.slug !== slug);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.productPage}>
      <Helmet>
        <title>{product.name} | Premium Steel Supplier in Ghaziabad, NCR | Maruti Steel Syndicate</title>
        <meta name="description" content={`Buy ${product.name} in Ghaziabad, NCR, and North India. ${product.shortDescription} Best prices for industrial steel.`} />
        <meta name="keywords" content={`${product.name}, Buy ${product.name} Ghaziabad, ${product.name} supplier NCR, ${product.name} price Loha Mandi, Maruti Steel Syndicate`} />
        <link rel="canonical" href={`https://marutisteelsyndicate.com/products/${product.slug}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${product.name} | Maruti Steel Syndicate`} />
        <meta property="og:description" content={`Buy ${product.name} in Ghaziabad, NCR, and North India. ${product.shortDescription}`} />
        <meta property="og:url" content={`https://marutisteelsyndicate.com/products/${product.slug}`} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "${product.name}",
              "image": "https://marutisteelsyndicate.com${product.image}",
              "description": "${product.shortDescription}",
              "brand": {
                "@type": "Brand",
                "name": "Maruti Steel Syndicate"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://marutisteelsyndicate.com/products/${product.slug}",
                "priceCurrency": "INR",
                "price": "Call for Price",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Maruti Steel Syndicate"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>{product.name}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>
            <div className={styles.productContent}>
              {/* 1. Image */}
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* 2. Inquiry Card (Moved here for better mobile flow) */}
              <div className={`${styles.inquiryCard} ${styles.mobileOnly}`}>
                <h3>Premium Pricing</h3>
                <p>We offer competitive rates for bulk industrial orders. Request your personalized quote today.</p>
                <button onClick={openModal} className="btn btn-primary w-full">
                   <Tag size={18} style={{marginRight: '8px'}} /> Get Best Price
                </button>
              </div>

              {/* 3. Description */}
              <div className={styles.description}>
                <h2>Product Overview</h2>
                <p>{product.description}</p>
              </div>

              {/* Key Highlights (Cost Base & Tons Supplied) */}
              <div className={styles.highlightsContainer}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>
                    <IndianRupee size={24} />
                  </div>
                  <div className={styles.highlightText}>
                    <span className={styles.highlightLabel}>Cost Base</span>
                    <strong className={styles.highlightValue}>{product.costBase}</strong>
                  </div>
                </div>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>
                    <Package size={24} />
                  </div>
                  <div className={styles.highlightText}>
                    <span className={styles.highlightLabel}>Tons Supplied</span>
                    <strong className={styles.highlightValue}>{product.tonsSupplied}</strong>
                  </div>
                </div>
              </div>

              {/* 4. Specifications */}
              <div className={styles.specsSection}>
                <h2>Technical Specifications</h2>
                <div className={styles.specsTable}>
                  {product.specifications.map((spec, index) => (
                    <div key={index} className={styles.specRow}>
                      <span className={styles.specLabel}>{spec.label}</span>
                      <span className={styles.specValue}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4.5 Available Sizes */}
              {product.availableSizes && (
                <div className={styles.sizesSection}>
                  <h2>Available Sizes & Thickness</h2>
                  <p className={styles.sizesIntro}>We maintain a comprehensive inventory of the following standard sizes. Custom sizing is available upon request.</p>
                  <div className={styles.tableResponsive}>
                    <table className={styles.sizesTable}>
                      <thead>
                        <tr>
                          <th>{product.id === 'cr-sheets' ? 'Gauge' : 'Size / Gauge'}</th>
                          <th>{product.id === 'cr-sheets' ? 'IN mm' : 'Thickness'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.availableSizes.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <span className={styles.gaugeBadge}>{item.size}</span>
                            </td>
                            <td className={styles.thicknessValue}>
                              {item.thickness}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 5. Features & Apps */}
              <div className={styles.featuresApps}>
                <div className={styles.featureCol}>
                  <h3>Key Features</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}><CheckCircle2 size={18} /> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.appCol}>
                  <h3>Industrial Applications</h3>
                  <ul>
                    {product.applications.map((app, index) => (
                      <li key={index}><CheckCircle2 size={18} /> {app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className={styles.sidebar}>
              {/* Desktop Only Inquiry Card */}
              <div className={`${styles.inquiryCard} ${styles.desktopOnly}`}>
                <h3>Premium Pricing</h3>
                <p>We offer competitive rates for bulk industrial orders. Request your personalized quote today.</p>
                <button onClick={openModal} className="btn btn-primary w-full">
                   <Tag size={18} style={{marginRight: '8px'}} /> Get Best Price
                </button>
              </div>



              <div className={styles.relatedProducts}>
                <h3>Other Categories</h3>
                {otherProducts.map(p => (
                  <Link key={p.id} to={`/products/${p.slug}`} className={styles.relatedItem}>
                    <span>{p.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>



      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        productName={product.name} 
      />
    </div>
  );
};

export default ProductDetail;
