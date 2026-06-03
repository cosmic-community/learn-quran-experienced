// app/tutors/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTutor, getMetafieldValue } from '@/lib/cosmic'

export default async function TutorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tutor = await getTutor(slug)

  if (!tutor) {
    notFound()
  }

  const name = getMetafieldValue(tutor.metadata?.name) || tutor.title
  const bio = getMetafieldValue(tutor.metadata?.bio)
  const gender = getMetafieldValue(tutor.metadata?.gender)
  const years = tutor.metadata?.years_experience
  const photo = tutor.metadata?.photo
  const specializations = tutor.metadata?.specializations || []

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/tutors" className="text-brand-600 hover:underline text-sm">
        ← Back to tutors
      </Link>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          {photo ? (
            <img
              src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={name}
              width={300}
              height={300}
              className="w-full rounded-2xl object-cover card-shadow"
            />
          ) : (
            <div className="w-full aspect-square rounded-2xl bg-brand-50 flex items-center justify-center text-6xl">
              👨‍🏫
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{name}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-500">
            {gender && (
              <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-sm font-medium">
                {gender}
              </span>
            )}
            {years ? (
              <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                {years} years experience
              </span>
            ) : null}
          </div>

          {specializations.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((s, i) => (
                  <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {bio && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bio}</p>
            </div>
          )}

          <a
            href="https://najamacademy.com/registration/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Book a Class with {name.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>
  )
}