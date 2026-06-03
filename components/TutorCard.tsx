import Link from 'next/link'
import type { Tutor } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  const name = getMetafieldValue(tutor.metadata?.name) || tutor.title
  const gender = getMetafieldValue(tutor.metadata?.gender)
  const years = tutor.metadata?.years_experience
  const photo = tutor.metadata?.photo
  const specializations = tutor.metadata?.specializations || []

  return (
    <Link
      href={`/tutors/${tutor.slug}`}
      className="group bg-white rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="aspect-square overflow-hidden bg-brand-50">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">👨‍🏫</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
          {gender && <span>{gender}</span>}
          {gender && years ? <span>•</span> : null}
          {years ? <span>{years} yrs experience</span> : null}
        </div>
        {specializations.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {specializations.slice(0, 3).map((s, i) => (
              <span key={i} className="text-xs text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-full">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}