import { resumeData } from '../data/resume';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero personalInfo={resumeData.personalInfo} />
      <About
        personalInfo={resumeData.personalInfo}
        education={resumeData.education}
      />
      <Experience experience={resumeData.experience} />
      <Skills skills={resumeData.skills} />
      <Projects projects={resumeData.projects} />
      <Certificates certificates={resumeData.certificates} />
      <Contact personalInfo={resumeData.personalInfo} />
      <Footer name={resumeData.personalInfo.name} />
    </main>
  );
}
