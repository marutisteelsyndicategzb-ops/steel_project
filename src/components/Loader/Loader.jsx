import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.content}>
        <div className={styles.metalSheet}>
          <div className={styles.glowLine}></div>
          <div className={styles.logoText}>
            <div className={styles.brandMain}>MARUTI STEEL</div>
            <div className={styles.brandSub}>SYNDICATE</div>
          </div>
        </div>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
          <p className={styles.statusText}>Quality that matters...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
