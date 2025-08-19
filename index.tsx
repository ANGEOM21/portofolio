import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Sertifikasi from '@/components/Sertifikasi';
import './index.css';

// --- Main App ---
const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Sertifikasi />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

// --- Render ---
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <App />
);
