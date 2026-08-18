import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, ShieldCheck, Award, Settings, Headset, 
  Truck, TrendingDown, Users, Package, Star 
} from 'lucide-react';
import styles from './Home.module.css';
import { products, testimonials, companyDetails, whyChooseUs } from '../../data/data';
import homeBg from '../../assets/homeBg.mp4';
import homeAboutImg from '../../assets/home-about.png';
import brandTata from '../../assets/brands/tata.png';
import brandJsw from '../../assets/brands/jsw.jpg';
import brandSail from '../../assets/brands/sail.jpg';
import brandJindal from '../../assets/brands/jindal.jpg';
import brandAmns from '../../assets/brands/AMNS.png';
import brandNmdc from '../../assets/brands/Nmdc.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Maruti Steel Syndicate (MSS) | HR CR Sheet Supplier in Ghaziabad</title>
        <meta name="description" content="Maruti Steel Syndicate (MSS) is hr cr sheet supplier in Ghaziabad. Supplying top quality CR sheets, HR sheets, and Chequered sheets at the best wholesale prices in Loha Mandi, Ghaziabad." />
        <meta name="keywords" content="MSS, MSS Ghaziabad, Maruti Steel Syndicate, Maruti Steel Syndicate Ghaziabad, Best CR Sheet in Ghaziabad, Best HR Sheet in Ghaziabad, Best HR CR Sheet Supplier in Ghaziabad, Best Steel Sheets in Ghaziabad, CR Sheet Supplier Ghaziabad, HR Sheet Supplier Ghaziabad, Chequered Sheet Supplier Ghaziabad" />
        <link rel="canonical" href="https://marutisteelsyndicate.co.in/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Maruti Steel Syndicate (MSS) | HR CR Sheet Supplier in Ghaziabad" />
        <meta property="og:description" content="Maruti Steel Syndicate (MSS) is hr cr sheet supplier in Ghaziabad. Wholesale suppliers of high-grade CR sheets, HR sheets, and Chequered sheets." />
        <meta property="og:url" content="https://marutisteelsyndicate.co.in/" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://marutisteelsyndicate.co.in/#localbusiness",
                  "name": "Maruti Steel Syndicate",
                  "alternateName": ["MSS", "MSS Ghaziabad"],
                  "image": "https://marutisteelsyndicate.co.in/logo.png",
                  "url": "https://marutisteelsyndicate.co.in/",
                  "telephone": "+919021554396",
                  "email": "marutisteelsyndicategzb@gmail.com",
                  "priceRange": "INR",
                  "founder": {
                    "@type": "Person",
                    "name": "Mr. Vijay Singhal"
                  },
                  "foundingDate": "1984",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "76 & 24, Loha Mandi, Bulandshahr Road Industrial Area",
                    "addressLocality": "Ghaziabad",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "201009",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 28.6458472,
                    "longitude": 77.4504791
                  },
                  "hasMap": "https://maps.app.goo.gl/uRauDjiwAgDvQ16w7",
                  "areaServed": [
                    {
                      "@type": "AdministrativeArea",
                      "name": "Ghaziabad"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Noida"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Delhi NCR"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "North India"
                    }
                  ],
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  "sameAs": [
                    "https://marutisteelsyndicate.co.in/",
                    "https://www.linkedin.com/company/maruti-steel-syndicate/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://marutisteelsyndicate.co.in/#website",
                  "url": "https://marutisteelsyndicate.co.in/",
                  "name": "Maruti Steel Syndicate",
                  "alternateName": ["MSS", "MSS Ghaziabad"],
                  "description": "Premium industrial CR Sheets, HR Sheets, and Chequered Sheets supplier in Ghaziabad.",
                  "publisher": {
                    "@id": "https://marutisteelsyndicate.co.in/#localbusiness"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://marutisteelsyndicate.co.in/products?search={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://marutisteelsyndicate.co.in/#navigation",
                  "name": "Home",
                  "url": "https://marutisteelsyndicate.co.in/"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "About Us",
                  "url": "https://marutisteelsyndicate.co.in/about"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Cold Rolled (CR) Sheets",
                  "url": "https://marutisteelsyndicate.co.in/products/cr-sheets"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Hot Rolled (HR) Sheets",
                  "url": "https://marutisteelsyndicate.co.in/products/hr-sheets"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Chequered Sheets",
                  "url": "https://marutisteelsyndicate.co.in/products/chequered-sheets"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Contact",
                  "url": "https://marutisteelsyndicate.co.in/contact"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.heroVideo}
        >
          <source src={homeBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={`section-label ${styles.heroLabel}`}>Welcome to Maruti Steel Syndicate</span>
            <h1>HR CR Sheet Supplier in Ghaziabad <span className="highlight">Since 1984</span></h1>
            <p>Powering global infrastructure with precision-engineered CR & HR steel solutions and a legacy of uncompromising structural integrity.</p>
            <div className={styles.heroBtns}>
              <Link to="/products" className="btn btn-primary">Explore Products <ChevronRight size={18} /></Link>
              <Link to="/contact" className="btn btn-white-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.brandsSection}>
        <div className={styles.brandsContent}>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              <div className={styles.logoTrack}>
                <div className={styles.logoItem}><img src={brandTata} alt="Tata Steel" /></div>
                <div className={styles.logoItem}><img src={brandJsw} alt="JSW Steel" /></div>
                <div className={styles.logoItem}><img src={brandSail} alt="SAIL" /></div>
                <div className={styles.logoItem}><img src={brandJindal} alt="Jindal Steel" /></div>
                <div className={styles.logoItem}><img src={brandAmns} alt="AMNS" /></div>
                <div className={styles.logoItem}><img src={brandNmdc} alt="NMDC" /></div>
              </div>
              {/* Duplicated for infinite scroll on mobile */}
              <div className={`${styles.logoTrack} ${styles.mobileOnlyTrack}`} aria-hidden="true">
                <div className={styles.logoItem}><img src={brandTata} alt="" /></div>
                <div className={styles.logoItem}><img src={brandJsw} alt="" /></div>
                <div className={styles.logoItem}><img src={brandSail} alt="" /></div>
                <div className={styles.logoItem}><img src={brandJindal} alt="" /></div>
                <div className={styles.logoItem}><img src={brandAmns} alt="" /></div>
                <div className={styles.logoItem}><img src={brandNmdc} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className={`${styles.homeSection} bg-light`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className="section-label">About Us</span>
              <h2>A Legacy of <span className="highlight">Technical Mastery</span> and Trust</h2>
              <p>
                Founded by <strong>{companyDetails.founder}</strong> and backed by over four decades of industrial leadership, Maruti Steel Syndicate has redefined the standards of high-grade steel supply. We don't just deliver materials; we provide the foundational strength and precision-engineered solutions that drive manufacturing and infrastructure forward.
              </p>
              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <ShieldCheck className={styles.featureIcon} />
                  <span>Quality Assured Products</span>
                </div>
                <div className={styles.featureItem}>
                  <Award className={styles.featureIcon} />
                  <span>Technical Expertise</span>
                </div>
                <div className={styles.featureItem}>
                  <Settings className={styles.featureIcon} />
                  <span>Precision Processing</span>
                </div>
              </div>
              <Link to="/about" className="link-btn">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <img src={homeAboutImg} alt="Maruti Steel Syndicate - Premium HR CR Sheet Supplier in Ghaziabad" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className={`${styles.homeSection} bg-white`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Products</span>
            <h2>Product <span className="highlight">Categories</span></h2>
          </div>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <img src={product.image} alt={`${product.name} - Best Steel Sheets in Ghaziabad - Maruti Steel Syndicate`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.productCardContent}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to={`/products/${product.id}`} className={styles.cardLink}>
                    View Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.homeSection} bg-light`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className="section-label">Why Maruti Steel Syndicate</span>
              <h2>Engineered for <span className="highlight">Unrivaled Performance</span></h2>
              <p>Merging decades of metallurgical expertise with a relentless commitment to quality, we deliver steel solutions that catalyze industrial growth and project success.</p>

              <div className={styles.benefitGrid}>
                {whyChooseUs.map((item, index) => {
                  const Icon = { ShieldCheck, Award, Settings, Headset, Truck, TrendingDown, Users, Package, Star }[item.icon];
                  return (
                    <div key={index} className={styles.benefitCard}>
                      <div className={styles.benefitIcon}>
                        {Icon && <Icon size={32} />}
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Removed standalone whyImage for a cleaner grid-focused look */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to start your next <span className="highlight">Industrial</span> project?</h2>
            <p>Contact our sales team today for a custom quote on premium CR, HR and Chequered sheets.</p>
            <Link to="/contact" className="btn btn-white">Get a Quote Now</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.homeSection} bg-white`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2>Client <span className="highlight">Trust</span></h2>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
