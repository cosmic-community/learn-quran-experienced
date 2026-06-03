// app/courses/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourse, getMetafieldValue } from '@/lib/cosmic'
import TutorCard from '@/components/TutorCard'

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = await getCourse(slug)

  if (!course) {
    notFound()
  }

  const name = getMetafieldValue(course.metadata?.course_name) || course.title
  const fullDesc = getMetafieldValue(course.metadata?.full_description)
  const shortDesc = getMetafieldValue(course.metadata?.short_description)
  const level = getMetafieldValue(course.metadata?.level)
  const ageGroup = getMetafieldValue(course.metadata?.age_group)
  const format = getMetafieldValue(course.metadata?.lesson_format)
  const image = course.metadata?.featured_image
  const tutors = course.metadata?.tutors || []

  return (
    <div>
      <section className="gradient-hero text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/courses" className="text-brand-200 hover:text-white text-sm">
            ← Back to courses
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">{name}</h1>
          {shortDesc && <p className="mt-4 text-brand-100 text-lg max-w-2xl">{shortDesc}</p>}
          <div className="flex flex-wrap gap-3 mt-6">
            {level && (
              <span className="bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm">
                Level: {level}
              </span>
            )}
            {ageGroup && (
              <span className="bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm">
                Age: {ageGroup}
              </span>
            )}
            {format && (
              <span className="bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm">
                {format}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {image && (
            <img
              src={`${image.imgix_url}?w=1400&h=700&fit=crop&auto=format,compress`}
              alt={name}
              width={700}
              height={350}
              className="w-full rounded-2xl object-cover card-shadow mb-8"
            />
          )}
          {fullDesc ? (
            <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {fullDesc}
            </div>
          ) : (
            <p className="text-gray-600">{shortDesc}</p>
          )}
        </div>

        <aside>
          <div className="bg-white rounded-2xl card-shadow p-6 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-2">Ready to begin?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Start with a free trial class and experience our teaching approach.
            </p>
            <a
              href="https://najamacademy.com/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </aside>
      </div>

      {tutors.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
              Course Tutors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutors.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}