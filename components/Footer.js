import styles from './Footer.module.css';

export default function Footer({ name }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {name}. Built with Next.js 14 & React.js.
        </p>

        <a href="#hero" className={styles.backToTop}>
          Back to top
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </a>
      </div>
    </footer>
  );
}
