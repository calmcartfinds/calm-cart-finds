export default function CalmCartFinds() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Calm Cart Finds</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Curated Amazon finds, wellness ideas, and lifestyle inspiration for calmer living.
        </p>
        <a
          href="https://www.pinterest.com/calmcartfinds"
          target="_blank"
          className="inline-block px-6 py-3 rounded-2xl shadow bg-black text-white font-medium hover:opacity-90 transition"
        >
          Follow on Pinterest
        </a>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 pb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Calm Cart Finds</h2>
        <p className="text-gray-600">
          Calm Cart Finds is a curated space where you discover useful products, wellness tips, and simple lifestyle ideas.
          Our goal is to help you shop smarter, live better, and create a calmer everyday life.
        </p>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-16">
        <div className="p-6 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Amazon Finds</h3>
          <p className="text-gray-600">Trending, useful products handpicked to simplify your daily routine.</p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
          <p className="text-gray-600">Easy wellness ideas and habits to help you feel your best.</p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Lifestyle Ideas</h3>
          <p className="text-gray-600">Inspiration for productivity, organization, and everyday calm.</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-2xl font-semibold mb-4">Get weekly finds</h2>
          <p className="text-gray-600 mb-6">Join our list for exclusive product finds and wellness tips.</p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl border w-full md:w-auto"
            />
            <button className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 px-6">
        <p>
          Disclaimer: This site may contain affiliate links. We may earn a small commission at no extra cost to you.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Calm Cart Finds</p>
      </footer>
    </div>
  );
}
