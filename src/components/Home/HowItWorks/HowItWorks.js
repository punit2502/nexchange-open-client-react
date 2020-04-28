import React from 'react';
import { I18n } from 'react-i18next';

import styles from './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className={`container ${styles.container}`}>
          <h1>HOW IT WORKS?</h1>
          <div className={styles["video-placeholder"]}>
            <h2>Video Explainer</h2>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default HowItWorks;
