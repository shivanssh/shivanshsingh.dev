import AnimatedSection from "./AnimatedSection";
import styles from "./About.module.css";

export default function About({ personalInfo, education }) {
  return (
    <AnimatedSection id="about" className={styles.aboutSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">// 01. UI Architecture & Profile</span>
          <h2 className="sectionTitle">
            Engineering <span className="gradientText">User Interfaces</span>
          </h2>
        </div>

        <div className={styles.bentoGrid}>
          {/* Bento Card 1 (Span 8): UI Philosophy */}
          <div className={`${styles.bentoCard} ${styles.colSpan8}`}>
            <div>
              <div className={styles.cardIconHeader}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Senior Full Stack Engineer</h3>
              <p className={styles.cardDesc}>{personalInfo.profileBio}</p>
            </div>

            <div className={styles.infoPillGrid}>
              <div className={styles.infoPill}>
                <div className={styles.infoPillLabel}>Location</div>
                <div className={styles.infoPillValue}>
                  {personalInfo.location}
                </div>
              </div>
              <div className={styles.infoPill}>
                <div className={styles.infoPillLabel}>Current Role</div>
                <div className={styles.infoPillValue}>
                  Consultant @ Deloitte
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Span 4): Education & Merit */}
          <div className={`${styles.bentoCard} ${styles.colSpan4}`}>
            <div>
              <div className={styles.cardIconHeader}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Academic Background</h3>
              <p className={styles.cardDesc}>
                Strong engineering foundation with rigorous computer science
                principles.
              </p>
            </div>

            <div
              className={styles.infoPillGrid}
              style={{ gridTemplateColumns: "1fr" }}>
              <div className={styles.infoPill}>
                <div className={styles.infoPillLabel}>Degree</div>
                <div className={styles.infoPillValue}>{education.degree}</div>
              </div>
              <div className={styles.infoPill}>
                <div className={styles.infoPillLabel}>University & Merit</div>
                <div className={styles.infoPillValue}>
                  {education.institution} ({education.score})
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 3 (Span 4): Design System & Component Library */}
          <div className={`${styles.bentoCard} ${styles.colSpan4}`}>
            <div className={styles.cardIconHeader}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Design Systems & Tokens</h3>
            <p className={styles.cardDesc}>
              Crafting reusable React component libraries with design tokens,
              strict state encapsulation, and smooth 60fps micro-interactions.
            </p>
          </div>

          {/* Bento Card 4 (Span 4): Accessibility & TDD */}
          <div className={`${styles.bentoCard} ${styles.colSpan4}`}>
            <div className={styles.cardIconHeader}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>WCAG AA & 80%+ TDD</h3>
            <p className={styles.cardDesc}>
              Full keyboard accessibility, screen reader optimization, and
              robust unit test coverage using Jest & React Testing Library.
            </p>
          </div>

          {/* Bento Card 5 (Span 4): Enterprise Security & Performance */}
          <div className={`${styles.bentoCard} ${styles.colSpan4}`}>
            <div className={styles.cardIconHeader}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Enterprise SSO & Perf</h3>
            <p className={styles.cardDesc}>
              Custom ADFS SSO/SLO authentication middleware, Redis session
              caching, and Next.js Server Actions for minimum TTFB.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
