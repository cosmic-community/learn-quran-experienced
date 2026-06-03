import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📖</span>
              <span className="text-xl font-extrabold">Najam Academy</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">
              Learn Quran online with experienced and dedicated tutors. Flexible
              schedules, one-on-one guidance, and personalized support from home.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-brand-200">
              <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link href="/tutors" className="hover:text-white">Tutors</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-brand-200">
              <li>Tajweed</li>
              <li>Quran Recitation</li>
              <li>Memorization (Hifz)</li>
              <li>Quran Translation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-sm text-brand-200 mb-4">
              Begin your spiritual journey today with a free trial class.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
        <div className="border-t border-brand-700 mt-10 pt-6 text-center text-sm text-brand-300">
          © {new Date().getFullYear()} Najam Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}