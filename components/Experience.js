import AnimatedSection from './AnimatedSection';
import styles from './Experience.module.css';

export default function Experience({ experience }) {
  return (
    <AnimatedSection id="experience" className={styles.expSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">// 02. Career Track</span>
          <h2 className="sectionTitle">
            Professional <span className="gradientText">Experience</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.expCard}>
              <div className={styles.node}></div>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.roleTitle}>{exp.role}</h3>
                  <div className={styles.companyName}>
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.location}</span>
                  </div>
                </div>
                <div className={styles.periodBadge}>{exp.period}</div>
              </div>

              <ul className={styles.highlightsList}>
                {exp.highlights.map((point, pointIdx) => (
                  <li key={pointIdx} className={styles.highlightItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
