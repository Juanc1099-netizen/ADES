import { Database, Lock, Target, Skull } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Earth Seed Vault',
      description: 'The last genetic archive of humanity preserved in cryogenic stasis. Every plant, animal, and human DNA sequence secured.',
      color: 'cyan'
    },
    {
      icon: Lock,
      title: 'Surviving Blockchain Core',
      description: 'Decentralized ledgers that outlasted civilization. The immutable record of human knowledge and digital assets.',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Mission Protocol ADES',
      description: 'Advanced defense algorithms and evacuation procedures. Protect, preserve, and escape with humanity\'s legacy intact.',
      color: 'cyan'
    },
    {
      icon: Skull,
      title: 'Alien Threat',
      description: 'Unknown extraterrestrial scavengers detected approaching Earth. Time is running out. The extraction window is closing.',
      color: 'purple'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold glow-cyan mb-6">
            MISSION CRITICAL
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The elements that define ADES's purpose and the threats that drive urgency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 ${
                feature.color === 'cyan' ? 'neon-border' : 'neon-border-purple'
              } hover:scale-105 transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                feature.color === 'cyan'
                  ? 'from-cyan-500/10 to-transparent'
                  : 'from-purple-500/10 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative space-y-6">
                <div className={`inline-flex p-4 ${
                  feature.color === 'cyan'
                    ? 'neon-border bg-cyan-500/10'
                    : 'neon-border-purple bg-purple-500/10'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 ${
                    feature.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`} />
                </div>

                <h3 className={`text-3xl font-bold ${
                  feature.color === 'cyan'
                    ? 'text-white group-hover:text-cyan-300'
                    : 'text-white group-hover:text-purple-300'
                } transition-colors`}>
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`h-1 w-16 rounded-full ${
                  feature.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
                } group-hover:w-32 transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
