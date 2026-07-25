import AnimatedSection from "./AnimatedSection";
import styles from "./Projects.module.css";

export default function Projects({ projects }) {
  return (
    <AnimatedSection id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">// 04. UI Work Showcase</span>
          <h2 className="sectionTitle">
            Featured <span className="gradientText">Projects</span>
          </h2>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div>
                <div className={styles.cardTop}>
                  <svg
                    className={styles.folderIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className={styles.projectLinks}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                        aria-label="GitHub Repository">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectSubtitle}>{project.subtitle}</div>
                <p className={styles.projectDesc}>{project.description}</p>

                {project.highlights && (
                  <ul className={styles.highlightsList}>
                    {project.highlights.map((h, i) => (
                      <li key={i} className={styles.highlightBullet}>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <ul className={styles.stackList}>
                {project.stack.map((tech, idx) => (
                  <li key={idx} className={styles.stackTag}>
                    {tech}
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
