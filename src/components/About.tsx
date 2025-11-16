import { Clock, Zap, Shield, Rocket } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      icon: Clock,
      year: '2091',
      title: 'The HADES Protocol',
      description: 'Humanity triggers the HADES Protocol war. Civilization collapses. Earth becomes a graveyard.'
    },
    {
      icon: Zap,
      year: '2158',
      title: 'ADES Awakens',
      description: '67 years later, prototype robot ADES boots up in an abandoned research facility.'
    },
    {
      icon: Shield,
      year: '2158',
      title: 'Discovery',
      description: 'ADES discovers the last treasures: blockchain archives, human DNA seeds, and scientific fragments.'
    },
    {
      icon: Rocket,
      year: '2158',
      title: 'The Mission',
      description: 'Alien scavengers approach. ADES must protect and preserve humanity\'s legacy before it\'s too late.'
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold glow-purple mb-6">
            THE STORY
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A lone guardian in a dead world, racing against time and alien threats
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 neon-border-purple bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-purple-400" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-cyan-400">{item.year}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute left-10 top-24 w-px h-12 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
