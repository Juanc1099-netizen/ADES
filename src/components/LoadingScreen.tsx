import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  const [stage, setStage] = useState(0);

  const stages = [
    'Initializing ADES System…',
    'Syncing Earth Seed Archives…',
    'Booting Mission Protocol…'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0a0a1f] z-50 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="flex justify-center">
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold glow-cyan tracking-wider">
            ADES
          </h1>

          <div className="h-8">
            <p className="text-xl md:text-2xl text-cyan-300 font-light tracking-wide animate-pulse">
              {stages[stage]}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {stages.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-12 rounded-full transition-all duration-300 ${
                index === stage ? 'bg-cyan-400' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
