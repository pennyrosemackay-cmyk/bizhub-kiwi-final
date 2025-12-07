import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
        BizHub.<span className="text-blue-600">Kiwi</span>
      </h1>
      <p className="text-2xl md:text-4xl text-gray-700 font-medium mb-8">
        Kiwi Businesses. Powered by Locals, for Locals.
      </p>
      <p className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">
        <span className="text-blue-600">47+</span> businesses already live
      </p>

      <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
        <Link
          href="/join"
          className="px-16 py-8 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all"
        >
          Claim Your Free Page
        </Link>
        <Link
          href="#examples"
          className="px-16 py-8 border-4 border-blue-600 text-blue-600 hover:bg-blue-50 text-2xl font-bold rounded-full transition-all"
        >
          See Examples
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-2xl text-gray-600">
        <div>✓ No credit card</div>
        <div>✓ Live in 2 mins</div>
        <div>✓ You own it</div>
        <div>✓ Found on Google</div>
      </div>

      {/* Example cards */}
      <div id="examples" className="max-w-7xl mx-auto px-6 py-24 w-full">
        <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
          Your Page Will Look This Good
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {["Sarah's Café", "Kiwi Plumbing Ltd", "Aroha Beauty Studio"].map((name) => (
            <div key={name} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-teal-600 flex items-center justify-center">
                <p className="text-white text-4xl font-bold">{name}</p>
              </div>
              <div className="p-10 text-center">
                <p className="text-xl text-gray-700 mb-4">About • Services • Gallery • Contact</p>
                <p className="text-sm text-gray-500">
                  bizhub.kiwi/business/{name.toLowerCase().replace(/\s+/g, "-")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
