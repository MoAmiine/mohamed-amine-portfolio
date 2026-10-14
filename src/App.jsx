import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import PageIntro from './components/PageIntro';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import AboutImpact from './components/AboutImpact';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseMe from './components/WhyChooseMe';
import CtaFooter from './components/CtaFooter';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#10d9a0] selection:text-black relative">
      
      {/* Page Load Intro Animation */}
      <PageIntro />

      {/* Custom Framer Cursor */}
      <CustomCursor />

      {/* Floating Transparent/Glass Navbar with Fullscreen Overlay */}
      <Navbar />

      {/* 1. HERO (Full Screen with Blueprint Grid, Photo, Giant Outline Name) */}
      <Hero />

      {/* 2. TRUSTED / TECH MARQUEE (White strip) */}
      <TechMarquee />

      {/* 3. ABOUT / IMPACT (Off-White Section with 3-Line Reveal & Stats) */}
      <AboutImpact />

      {/* 4. SERVICES / COMPÉTENCES (Near-Black Section with Numbered Rows) */}
      <ServicesSection />

      {/* 5. PROJETS (Off-White Section with Asymmetric Polaroid Masonry) */}
      <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

      {/* 6. PROCESS / MA MÉTHODE (Near-Black Section with 4 Square Cards) */}
      <ProcessSection />

      {/* 7. WHY CHOOSE ME (Off-White Section with Blur-to-Sharp Text) */}
      <WhyChooseMe />

      {/* 8. CTA + FOOTER (Near-Black Section with Giant PARLONS-EN) */}
      <CtaFooter onShowToast={showToast} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Toast Notifications */}
      <Toast message={toastMessage} />

    </div>
  );
}
