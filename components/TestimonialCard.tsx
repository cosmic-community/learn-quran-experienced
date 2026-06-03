import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const name = getMetafieldValue(testimonial.metadata?.name) || testimonial.title
  const location = getMetafieldValue(testimonial.metadata?.location)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const rating = testimonial.metadata?.rating ?? 5
  const photo = testimonial.metadata?.photo

  return (
    <div className="bg-white rounded-2xl p-6 card-shadow flex flex-col h-full">
      <StarRating rating={rating} />
      <p className="text-gray-700 leading-relaxed mt-4 flex-1 italic">"{quote}"</p>
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          {location && <p className="text-xs text-gray-500">{location}</p>}
        </div>
      </div>
    </div>
  )
}