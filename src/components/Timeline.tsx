const Timeline = () => {
  const events = [
    {
      year: '2054',
      event: 'HADES Protocol activated'
    },
    {
      year: '2054',
      event: 'Humanity destroyed'
    },
    {
      year: '2121',
      event: 'ADES awakens'
    },
    {
      year: '2121',
      event: 'ADES finds Earth Seed'
    },
    {
      year: '2121',
      event: 'Aliens return'
    },
    {
      year: '2121',
      event: 'ADES escapes Earth'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold glow-purple mb-6">
            TIMELINE OF EVENTS
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

            <div className="space-y-8">
              {events.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-cyan-400 glow-cyan relative z-10"></div>
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                    </div>
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="neon-border bg-gradient-to-br from-gray-900/70 to-gray-800/50 p-6 hover:scale-[1.02] transition-all duration-300">
                      <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-bold text-cyan-300 glow-cyan">
                          {item.year}
                        </span>
                        <span className="text-gray-300 text-xl">
                          {item.event}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
