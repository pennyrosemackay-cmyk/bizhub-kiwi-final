// app/page.tsx — FINAL, BEAUTIFUL, NO EXTRA DEPENDENCIES
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-2xl">
            BizHub.<span className="text-yellow-400">Kiwi</span>
          </h1>
          <p className="mt-8 text-3xl md:text-5xl font-light text-white/90">
            Your stunning online home — live in minutes
          </p>
          <p className="mt-12 text-2xl text-white/80">
            First month <span className="font-bold text-yellow-400">FREE</span> · Then just $29/month
          </p>

          <div className="mt-16 flex flex-col gap-8 sm:flex-row justify-center">
            <Link
              href="/join"
              className="rounded-full bg-white px-16 py-8 text-2xl font-bold text-purple-600 shadow-2xl hover:scale-105 transition-all"
            >
              Claim Your Free Page
            </Link>
            <Link
              href="#examples"
              className="rounded-full border-4 border-white px-16 py-8 text-2xl font-bold text-white hover:bg-white/20 transition-all"
            >
              See Examples
            </Link>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-20">
            Your Page Will Look This Good
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {["Sarah’s Café", "Kiwi Plumbing Ltd", "Aroha Beauty Studio"].map((name) => (
              <div key={name} className="overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-4">
                <div className="h-80 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <p className="text-white text-4xl font-bold">{name}</p>
                </div>
                <div className="p-10">
                  <p className="text-xl text-gray-700 mb-4">About • Services • Gallery • Contact</p>
                  <p className="text-sm text-gray-500">
                    bizhub.kiwi/business/{name.toLowerCase().replace(/\s+/g, "-")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
