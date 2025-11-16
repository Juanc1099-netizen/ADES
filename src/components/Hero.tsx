import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 214, 160, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/ChatGPT Image 16 nov 2025, 02_02_16.png"
                  alt="ADES Logo"
                  className="w-32 h-32 animate-float"
                />
                <a
                  href="https://x.com/ADES_PROTOCOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 neon-border bg-black/30 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <img
                    src="/twitter-x-logo.png"
                    alt="X (Twitter)"
                    className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter glow-cyan">
                ADES
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-cyan-300 tracking-wide">
                Advanced Defender of Earth Seed
              </h2>
            </div>

            <div className="space-y-4 text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl">
              <p>
                67 years after the HADES Protocol war destroyed humanity, ADES awakens to a barren Earth.
              </p>
              <p>
                The last guardian of humanity's legacy: blockchain technology, genetic seeds, and fragments of knowledge.
              </p>
              <p className="text-purple-300">
                Alien scavengers are coming. The mission begins now.
              </p>
            </div>

            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 text-lg font-semibold neon-border bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 tracking-wider">ENTER THE MISSION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/ChatGPT Image 16 nov 2025, 00_42_09.png"
                alt="ADES Character"
                className="relative w-full max-w-lg animate-float delay-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
