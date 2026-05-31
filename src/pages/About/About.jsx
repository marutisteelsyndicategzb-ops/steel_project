import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Settings, Award, User } from 'lucide-react';
import styles from './About.module.css';
import { companyDetails, management } from '../../data/data';
import legacyImg from '../../assets/about-infra.jpg';
import infraImg from '../../assets/industrial-infra.png';
import parallaxBg from '../../assets/parallax-bg.png';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>About Us | Maruti Steel Syndicate Ghaziabad | 40+ Years of Steel Excellence</title>
        <meta name="description" content="Discover the 40+ year legacy of Maruti Steel Syndicate (MSS Ghaziabad), the premier steel sheet dealer in Ghaziabad. Leading wholesale distributor of authentic CR, HR, and Chequered sheets in Loha Mandi." />
        <meta name="keywords" content="About Maruti Steel Syndicate, MSS Ghaziabad, Steel Distributor Ghaziabad, Loha Mandi Steel Supplier, CR Sheets, HR Sheets, Chequered Sheets, Steel Sheet Dealer Ghaziabad" />
        <link rel="canonical" href="https://marutisteelsyndicate.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us | Maruti Steel Syndicate Ghaziabad | 40+ Years of Steel Excellence" />
        <meta property="og:description" content="Discover the 40+ year legacy of Maruti Steel Syndicate (MSS Ghaziabad), the premier steel sheet dealer in Ghaziabad." />
        <meta property="og:url" content="https://marutisteelsyndicate.com/about" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "AboutPage",
                  "@id": "https://marutisteelsyndicate.com/about/#webpage",
                  "url": "https://marutisteelsyndicate.com/about",
                  "name": "About Maruti Steel Syndicate",
                  "description": "Founded by Mr. Vijay Singhal, Maruti Steel Syndicate (MSS) has played a pivotal role in transforming steel distribution in North India since 1984.",
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
                        "name": "About Us",
                        "item": "https://marutisteelsyndicate.com/about"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "LocalBusiness",
                    "@id": "https://marutisteelsyndicate.com/#localbusiness",
                    "name": "Maruti Steel Syndicate",
                    "alternateName": ["MSS", "MSS Ghaziabad"],
                    "telephone": "+919021554396",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "76 & 24, Loha Mandi, Bulandshahr Road Industrial Area",
                      "addressLocality": "Ghaziabad",
                      "addressRegion": "Uttar Pradesh",
                      "postalCode": "201009",
                      "addressCountry": "IN"
                    }
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <section className={`page-header ${styles.parallaxHeader}`}>
        <div className="container">
          <h1>About Our Company</h1>
          <p>Building a stronger future with premium steel solutions.</p>
        </div>
      </section>

      <section className={`${styles.aboutSection} bg-white`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainText}>
              <h2>Our <span className="highlight">Legacy</span> of Quality</h2>
              <p>
                Founded by <strong>{companyDetails.founder}</strong>, Maruti Steel Syndicate (MSS) traces its origin to the growth years of an emerging nation - India. After independence, the steel sector was to propel the economic growth and rapid industrialization of the country, and since 1984, Maruti Steel Syndicate has played a pivotal role in transforming steel distribution and industrial value addition in the North India Region.
              </p>
              <p>
                As one of the best Iron and steel trading companies in the region, we provide top quality steel and iron at the best prices, making us the most trusted brand in the North India region. We have catered to customers across the length and breadth of the manufacturing industry in segments such as Power, Automobiles, Luminaries, LT/HT Panels and Fabrication.
              </p>
              <p>
                Our in-house processing centre, equipped with state-of-the-art fully automated Cut To Length lines and Slitting lines, enables us to provide our customers with high quality and high precision customized solutions in varied sizes and grades.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h3>40+</h3>
                  <span>Years of Experience</span>
                </div>
                <div className={styles.statItem}>
                  <h3>4000+</h3>
                  <span>Clients Served</span>
                </div>
                <div className={styles.statItem}>
                  <h3>Countless</h3>
                  <span>Tons Supplied</span>
                </div>
              </div>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.aboutImage}>
                <img src={legacyImg} alt="Maruti Steel Syndicate Ghaziabad - 40+ Years of Steel Excellence" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Infrastructure & Process Section (Brought Above) */}
      <section className={`${styles.aboutSection} bg-light`}>
        <div className="container">
          <div className={styles.infraGrid}>
            <div className={styles.infraImage}>
              <img src={infraImg} alt="MSS Ghaziabad - Advanced Cut-To-Length and Slitting Processing Facility" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
            <div className={styles.infraText}>
              <h2>Infrastructure & <span className="highlight">Process</span></h2>
              <p>Our in-house processing centre and state-of-the-art storage facilities are equipped with modern handling equipment to ensure material integrity throughout the processing and distribution cycle.</p>
              <ul>
                <li>Fully Automated Cut To Length & Slitting Lines</li>
                <li>Strategic Partnerships with Premier Steel Mills</li>
                <li>Advanced Quality Control & Precision Sizing</li>
                <li>Advanced Material Customization & Value Addition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className={`${styles.aboutSection} bg-white`}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <h2>Our Core <span className="highlight">Values</span></h2>
            <p>The principles that drive every decision we make.</p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <ShieldCheck size={32} />
              <h3>Quality Commitment</h3>
              <p>We never compromise on material specifications, ensuring every sheet meets international standards.</p>
            </div>
            <div className={styles.valueItem}>
              <Settings size={32} />
              <h3>Technical Expertise</h3>
              <p>Our team provides deep technical insights to help clients choose the right grades for specific applications.</p>
            </div>
            <div className={styles.valueItem}>
              <Award size={32} />
              <h3>Integrity</h3>
              <p>Transparency in pricing and honesty in timelines are the foundations of our long-term partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Leadership */}
      <section className={`${styles.aboutSection} bg-light`}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <h2>Core <span className="highlight">Leadership</span></h2>
            <p>The visionaries driving Maruti Steel Syndicate towards excellence.</p>
          </div>
          <div className={styles.managementGrid}>
            {management.map((member, index) => (
              <div key={index} className={styles.managementCard}>
                <div className={styles.imageContainer}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className={styles.memberImage} />
                  ) : (
                    <div className={styles.memberIcon}><User size={40} /></div>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
