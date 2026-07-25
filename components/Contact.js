'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import styles from './Contact.module.css';

export default function Contact({ personalInfo }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <AnimatedSection id="contact" className={styles.contactSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">// 06. Direct Connect</span>
          <h2 className="sectionTitle">
            Let's Build Something <span className="gradientText">Exceptional</span>
          </h2>
        </div>

        <div className={styles.communicationCard}>
          <div className={styles.headerRow}>
            <h3 className={styles.infoTitle}>Direct Contact Channels</h3>
            <div className={styles.statusPill}>
              <span className={styles.statusDot}></span>
              <span>Open for Senior / Lead Roles</span>
            </div>
          </div>

          <p className={styles.infoSubtitle}>
            Whether you have an enterprise project, senior engineering role, or technical consulting opportunity, feel free to reach out directly via email.
          </p>

          <div className={styles.channelsGrid}>
            {/* Primary Email Channel */}
            <div className={styles.channelBox}>
              <div className={styles.channelLeft}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className={styles.channelLabel}>Primary Email</div>
                  <a href={`mailto:${personalInfo.email}`} className={styles.channelValue}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button className={styles.copyBtn} onClick={handleCopyEmail}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Location Channel */}
            <div className={styles.channelBox}>
              <div className={styles.channelLeft}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className={styles.channelLabel}>Location</div>
                  <div className={styles.channelValue}>{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.responseFooter}>
            <div className={styles.responseBadge}>
              <svg className={styles.lightningIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Typical Response Time: Under 4 Hours</span>
            </div>

            <a href={`mailto:${personalInfo.email}`} className={styles.emailCtaBtn}>
              Send Direct Email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
