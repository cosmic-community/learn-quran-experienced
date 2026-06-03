import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-hero text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/10 backdrop-blur text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ⭐ Trusted Online Quran Academy Since 2011
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Learn Quran Online <br />
            <span className="text-accent-400">with Experienced Tutors</span>
          </h1>
          <p className="mt-6 text-lg text-brand-100 leading-relaxed max-w-xl">
            Engaging online classes for students of all ages — covering Tajweed,
            recitation, memorization, and Quran understanding. Flexible schedules
            and one-on-one guidance from the comfort of your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/courses"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            { emoji: '👨‍🏫', label: '1-on-1 Classes' },
            { emoji: '⏰', label: 'Flexible Timings' },
            { emoji: '👩‍🏫', label: 'Female Teachers' },
            { emoji: '🎓', label: 'Course Certificate' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <p className="font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}