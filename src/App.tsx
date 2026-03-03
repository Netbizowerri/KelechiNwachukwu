import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Education } from './components/education';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Toaster } from './components/ui/toaster';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Ensure body uses dark background on hydration.
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 160);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />

      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollToTop}
          className="md:hidden fixed bottom-5 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
