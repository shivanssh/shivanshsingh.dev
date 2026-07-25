import AnimatedSection from './AnimatedSection';
import styles from './Certificates.module.css';

export default function Certificates({ certificates }) {
  return (
    <AnimatedSection id="certificates" className={styles.certSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">// 05. Growth & Accreditation</span>
          <h2 className="sectionTitle">
            Certifications & <span className="gradientText">Learning</span>
          </h2>
        </div>

        <div className={styles.certGrid}>
          {certificates.map((cert, idx) => (
            <div key={idx} className={styles.certCard}>
              <div>
                <div className={styles.badgeHeader}>
                  <span className={styles.certBadge}>{cert.badge}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
              </div>
              <div className={styles.certIssuer}>Issued by {cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
