import { getTestimonials } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Reviews | Najam Academy',
  description: 'See what our students say about learning Quran online at Najam Academy.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Reviews"
        title="What Our Students Say"
        subtitle="Real feedback from learners around the world about their Quran learning journey."
      />
      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No reviews available yet.</p>
      )}
    </div>
  )
}