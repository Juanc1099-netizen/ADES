const ComicStory = () => {
  const comicPanels = [
    {
      image: '/ADES part 1 copy.png',
      alt: 'The End of Humanity - HADES Protocol activation'
    },
    {
      image: '/ADES part 2.png',
      alt: 'The ADES Project - Creation and purpose'
    },
    {
      image: '/ADES part 3.png',
      alt: 'The HADES Protocol - Final desperate measure'
    },
    {
      image: '/ADES part 4 copy copy copy copy copy copy copy.png',
      alt: 'The Awakening - ADES awakens after 67 years'
    },
    {
      image: '/ADES part 5 copy copy copy copy copy copy copy copy.png',
      alt: 'The Return of the Aliens - Alien scavengers arrive'
    },
    {
      image: '/ADES part 6 copy copy copy copy copy.png',
      alt: 'Return of the Aliens - ADES escapes with human genetic data'
    },
    {
      image: '/ADES part 7 copy copy.png',
      alt: 'The Escape - ADES flees Earth into space'
    }
  ];

  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold glow-purple mb-6">
            THE ORIGIN STORY
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the events that led to ADES's awakening
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {comicPanels.map((panel, index) => (
            <div
              key={index}
              className="group relative neon-border bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <img
                  src={panel.image}
                  alt={panel.alt}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black/80 backdrop-blur-sm p-4 rounded neon-border">
                  <p className="text-cyan-300 text-sm font-semibold tracking-wider">
                    CHAPTER {index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/50 neon-border">
            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed max-w-3xl">
              From the ashes of humanity's final war, ADES emerges as the last hope.
              <span className="block mt-4 text-cyan-300 font-semibold">
                The mission to preserve and protect begins now.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComicStory;
