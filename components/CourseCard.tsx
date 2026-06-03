import Link from 'next/link'
import type { Course } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CourseCard({ course }: { course: Course }) {
  const name = getMetafieldValue(course.metadata?.course_name) || course.title
  const desc = getMetafieldValue(course.metadata?.short_description)
  const level = getMetafieldValue(course.metadata?.level)
  const image = course.metadata?.featured_image

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-white rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform duration-300 flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-brand-50">
        {image ? (
          <img
            src={`${image.imgix_url}?w=700&h=440&fit=crop&auto=format,compress`}
            alt={name}
            width={350}
            height={220}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">📚</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {level && (
          <span className="inline-block self-start text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            {level}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {desc && <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{desc}</p>}
        <span className="mt-4 text-sm font-semibold text-accent-600 inline-flex items-center gap-1">
          Check Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}