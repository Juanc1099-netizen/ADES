const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-cyan-500/20">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <img
              src="/ChatGPT Image 16 nov 2025, 02_02_16.png"
              alt="ADES Logo"
              className="w-16 h-16"
            />
            <div className="h-12 w-px bg-cyan-400/30"></div>
            <div className="text-center">
              <h3 className="text-3xl font-bold glow-cyan tracking-wider">ADES</h3>
              <p className="text-sm text-cyan-300 font-light">Advanced Defender of Earth Seed</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-400">
            <span>Built on</span>
            <span className="text-purple-400 font-semibold tracking-wide">Solana</span>
          </div>

          <div className="h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              &copy; 2158 ADES Protocol. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Protecting humanity's legacy, one seed at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
