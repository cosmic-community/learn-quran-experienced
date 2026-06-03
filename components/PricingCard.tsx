import type { PricingPlan } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const name = getMetafieldValue(plan.metadata?.plan_name) || plan.title
  const price = plan.metadata?.price
  const period = getMetafieldValue(plan.metadata?.billing_period)
  const classesPerWeek = plan.metadata?.classes_per_week
  const duration = getMetafieldValue(plan.metadata?.class_duration)
  const featuresRaw = getMetafieldValue(plan.metadata?.features)
  const popular = plan.metadata?.most_popular === true

  const features = featuresRaw
    ? featuresRaw.split('\n').map((f) => f.trim()).filter(Boolean)
    : []

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        popular
          ? 'bg-brand-600 text-white card-shadow scale-[1.03]'
          : 'bg-white text-gray-900 card-shadow'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className={`text-xl font-bold ${popular ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
      <div className="mt-4 flex items-end gap-1">
        {price !== undefined && price !== null && (
          <span className="text-4xl font-extrabold">${price}</span>
        )}
        {period && (
          <span className={`text-sm mb-1 ${popular ? 'text-brand-200' : 'text-gray-500'}`}>
            /{period}
          </span>
        )}
      </div>
      <div className={`mt-4 text-sm space-y-1 ${popular ? 'text-brand-100' : 'text-gray-600'}`}>
        {classesPerWeek ? <p>{classesPerWeek} classes per week</p> : null}
        {duration ? <p>{duration} per class</p> : null}
      </div>
      {features.length > 0 && (
        <ul className="mt-6 space-y-3 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <svg
                className={`w-5 h-5 flex-shrink-0 ${popular ? 'text-accent-400' : 'text-accent-500'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className={popular ? 'text-brand-50' : 'text-gray-700'}>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href="https://najamacademy.com/registration/"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 text-center font-semibold px-6 py-3 rounded-full transition-colors ${
          popular
            ? 'bg-white text-brand-600 hover:bg-brand-50'
            : 'bg-brand-600 text-white hover:bg-brand-700'
        }`}
      >
        Start Free Trial
      </a>
    </div>
  )
}