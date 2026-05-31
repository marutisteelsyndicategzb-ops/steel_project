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

  let pageTitle = '';
  let pageDescription = '';
  let pageKeywords = '';

  if (product.slug === 'cr-sheets') {
    pageTitle = 'Best CR Sheet in Ghaziabad | Cold Rolled Sheet Dealer - Maruti Steel Syndicate (MSS)';
    pageDescription = 'Looking for the best CR Sheet in Ghaziabad? Maruti Steel Syndicate (MSS) is the leading CR sheet dealer in Ghaziabad, supplying premium-grade IS 513 cold-rolled steel sheets with superior surface finish and precise tolerances.';
    pageKeywords = 'Best CR Sheet in Ghaziabad, CR Sheet Dealer Ghaziabad, Cold Rolled Steel Sheets, Maruti Steel Syndicate Ghaziabad, MSS Ghaziabad, CR Sheet price Ghaziabad, Loha Mandi CR sheets';
  } else if (product.slug === 'hr-sheets') {
    pageTitle = 'Best HR Sheet in Ghaziabad | Hot Rolled Sheet & Plate Dealer - Maruti Steel Syndicate (MSS)';
    pageDescription = 'Get the best HR Sheet in Ghaziabad from Maruti Steel Syndicate (MSS), the leading HR sheet dealer in Ghaziabad. Supplying robust IS 2062/ASTM A36 Hot Rolled steel sheets & plates for structural use.';
    pageKeywords = 'Best HR Sheet in Ghaziabad, HR Sheet Dealer Ghaziabad, Hot Rolled Steel Sheets, Maruti Steel Syndicate Ghaziabad, MSS Ghaziabad, HR Sheet price Loha Mandi';
  } else if (product.slug === 'chequered-sheets') {
    pageTitle = 'Chequered Sheet Dealer Ghaziabad | Premium Anti-Skid Sheets - Maruti Steel Syndicate (MSS)';
    pageDescription = 'Premier Chequered Sheet dealer in Ghaziabad. Maruti Steel Syndicate (MSS Ghaziabad) offers high-quality, anti-slip patterned steel sheets for industrial safety, flooring, and staircases. Contact us for bulk prices.';
    pageKeywords = 'Chequered Sheet Dealer Ghaziabad, Chequered Sheets, Anti-skid Steel Plates, Maruti Steel Syndicate Ghaziabad, MSS Ghaziabad, Chequered sheets Ghaziabad price';
  } else {
    pageTitle = `${product.name} | Premium Steel Supplier in Ghaziabad, NCR | Maruti Steel Syndicate`;
    pageDescription = `Buy ${product.name} in Ghaziabad, NCR, and North India. ${product.shortDescription} Best prices for industrial steel.`;
    pageKeywords = `${product.name}, Buy ${product.name} Ghaziabad, ${product.name} supplier NCR, ${product.name} price Loha Mandi, Maruti Steel Syndicate`;
  }

  return (
    <div className={styles.productPage}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={`https://marutisteelsyndicate.co.in/products/${product.slug}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://marutisteelsyndicate.co.in/products/${product.slug}`} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://marutisteelsyndicate.co.in/products/${product.slug}/#product",
                  "name": "${product.name}",
                  "image": "https://marutisteelsyndicate.co.in${product.image}",
                  "description": "${product.shortDescription}",
                  "brand": {
                    "@type": "Brand",
                    "name": "Maruti Steel Syndicate"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "url": "https://marutisteelsyndicate.co.in/products/${product.slug}",
                    "priceCurrency": "INR",
                    "lowPrice": "Call for Price",
                    "highPrice": "Call for Price",
                    "offerCount": "1",
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "Maruti Steel Syndicate",
                      "@id": "https://marutisteelsyndicate.co.in/#localbusiness"
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
          <h1>{product.name}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>
            <div className={styles.productContent}>
              {/* 1. Image */}
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={`${product.name} supplier in Ghaziabad - Maruti Steel Syndicate`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
