import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import ComicStory from './components/ComicStory';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <Hero />
      <About />
      <ComicStory />
      <Timeline />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
