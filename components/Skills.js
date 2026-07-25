'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import styles from './Skills.module.css';

export default function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <AnimatedSection id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionTag">// 03. UI Tech Stack</span>
          <h2 className="sectionTitle">
            Frontend Architecture & <span className="gradientText">Skills</span>
          </h2>
        </div>

        <div className={styles.categoryFilter}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                activeCategory === cat ? styles.activeFilter : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {filteredSkills.map((group, groupIdx) => (
            <div key={groupIdx} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.titleDot}></span>
                {group.category}
              </h3>
              <div className={styles.skillsList}>
                {group.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
