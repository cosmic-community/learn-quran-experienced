import Link from 'next/link'
import { getCourses, getTutors, getPricingPlans, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import FeaturesStrip from '@/components/FeaturesStrip'
import SectionHeading from '@/components/SectionHeading'
import CourseCard from '@/components/CourseCard'
import TutorCard from '@/components/TutorCard'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [courses, tutors, plans, testimonials] = await Promise.all([
    getCourses(),
    getTutors(),
    getPricingPlans(),
    getTestimonials(),
  ])

  return (
    <div>
      <Hero />
      <FeaturesStrip />

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Featured Courses"
          title="What You Can Learn"
          subtitle="A thoughtfully designed curriculum tailored for learners of all ages and levels."
        />
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No courses available yet.</p>
        )}
        {courses.length > 6 && (
          <div className="text-center mt-10">
            <Link href="/courses" className="text-brand-600 font-semibold hover:underline">
              View all courses →
            </Link>
          </div>
        )}
      </section>

      {/* Tutors */}
      {tutors.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Teachers"
              title="Expert Male & Female Tutors"
              subtitle="Highly qualified, experienced, and professional teachers with Ijaza certification."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutors.slice(0, 4).map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
            {tutors.length > 4 && (
              <div className="text-center mt-10">
                <Link href="/tutors" className="text-brand-600 font-semibold hover:underline">
                  Meet all tutors →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing */}
      {plans.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            eyebrow="Affordable Plans"
            title="Simple, Flexible Pricing"
            subtitle="Choose a plan that fits your schedule and learning goals. Start with a free trial."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Reviews"
              title="What Our Students Say"
              subtitle="Real feedback from learners around the world."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Start Your Quran Journey Today!</h2>
          <p className="mt-4 text-brand-100 text-lg">
            We are available 24/7. Get a free trial class to experience our teaching approach.
          </p>
          <Link
            href="/pricing"
            className="inline-block mt-8 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Start Free Trial Lesson
          </Link>
        </div>
      </section>
    </div>
  )
}