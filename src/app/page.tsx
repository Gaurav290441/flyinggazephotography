
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#28251f]">

      <nav className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-2xl font-serif tracking-widest">
          FLYING GAZE
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-[650px] flex items-center justify-center text-center text-white bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(#0006,#0006),url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600')"
        }}
      >
        <div>
          <p className="tracking-[5px] mb-6">
            WEDDING • PORTRAIT • STORIES
          </p>

          <h2 className="text-5xl md:text-7xl font-serif mb-8">
            Moments That
            <br />
            Last Forever
          </h2>

          <a
            href="#portfolio"
            className="inline-block border border-white px-8 py-4 tracking-widest"
          >
            EXPLORE OUR WORK
          </a>
        </div>
      </section>

      <section id="about" className="py-24 px-6 text-center">
        <p className="tracking-[5px] text-sm text-[#9a8060] mb-5">
          WELCOME TO FLYING GAZE
        </p>

        <h2 className="text-4xl font-serif mb-6">
          Every Picture Has a Story
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 leading-8">
          We capture emotions, preserve memories and tell
          your beautiful stories through photography.
        </p>
      </section>

      <section id="portfolio" className="px-8 py-16">
        <h2 className="text-4xl font-serif text-center mb-12">
          Our Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Wedding Stories",
              image: "photo-1537633552985-df8429e8048b"
            },
            {
              name: "Pre Wedding",
              image: "photo-1511285560929-80b456fea0bc"
            },
            {
              name: "Couple Portraits",
              image: "photo-1511895426328-dc8714191300"
            }
          ].map((item) => (
            <div key={item.name}>
              <img
                src={`https://images.unsplash.com/${item.image}?w=800`}
                alt={item.name}
                className="w-full h-[400px] object-cover"
              />
              <h3 className="text-2xl font-serif mt-5">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eae3d8] py-20 text-center">
        <h2 className="text-4xl font-serif mb-5">
          Find Your Photos
        </h2>
        <p className="mb-8 text-gray-600">
          Your special memories are waiting for you.
        </p>
        <a
          href="#contact"
          className="bg-[#28251f] text-white px-8 py-4 inline-block"
        >
          FIND MY PHOTOS
        </a>
      </section>

      <footer id="contact" className="bg-[#28251f] text-white py-16 text-center">
        <h2 className="text-3xl font-serif tracking-widest">
          FLYING GAZE
        </h2>
        <p className="mt-4 text-gray-300">
          Photography | Moments Forever
        </p>
        <p className="mt-10 text-sm text-gray-400">
          © 2026 Flying Gaze Photography
        </p>
      </footer>

    </main>
  );
}
