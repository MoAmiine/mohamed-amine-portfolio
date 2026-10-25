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
import ServiceModal from './components/ServiceModal';
import CvModal from './components/CvModal';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize Lenis Smooth Scroll and guarantee scroll to top on reload
  useEffect(() => {
    // Disable browser automatic scroll restoration so refresh always starts at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    window.__lenis = lenis;
    lenis.scrollTo(0, { immediate: true });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.__lenis = null;
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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#000000] text-white selection:bg-[#a3e635] selection:text-black relative">
      
      {/* Page Load Intro Animation */}
      <PageIntro />

      {/* Custom Framer Cursor */}
      <CustomCursor />

      {/* Floating Transparent/Glass Navbar with Fullscreen Overlay */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* 1. HERO (Full Screen with Blueprint Grid, Photo, Giant Outline Name) */}
      <Hero />

      {/* 2. TRUSTED / TECH MARQUEE (White strip) */}
      <TechMarquee />

      {/* 3. ABOUT / IMPACT (Off-White Section with 3-Line Reveal & Stats) */}
      <AboutImpact />

      {/* 4. SERVICES / COMPÉTENCES (Near-Black Section with Numbered Rows) */}
      <ServicesSection onSelectService={(s) => setSelectedService(s)} />

      {/* 5. PROJETS (Off-White Section with Asymmetric Polaroid Masonry) */}
      <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

      {/* 6. PROCESS / MA MÉTHODE (Near-Black Section with 4 Square Cards) */}
      <ProcessSection />

      {/* 7. WHY CHOOSE ME (Off-White Section with Blur-to-Sharp Text) */}
      <WhyChooseMe />

      {/* 8. CTA + FOOTER (Near-Black Section with Giant PARLONS-EN) */}
      <CtaFooter onShowToast={showToast} onOpenCv={() => setIsCvOpen(true)} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* CV Preview & Download Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      {/* Interactive Toast Notifications */}
      <Toast message={toastMessage} />

      {/* Floating Return to Top Button */}
      <BackToTop />

    </div>
  );
}
