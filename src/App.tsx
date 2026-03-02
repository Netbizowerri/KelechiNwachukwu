import { useEffect } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Education } from './components/education';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Toaster } from './components/ui/toaster';

export default function App() {
  useEffect(() => {
    // Ensure body uses dark background on hydration.
    document.documentElement.classList.add('dark');
  }, []);

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
    </div>
  );
}
