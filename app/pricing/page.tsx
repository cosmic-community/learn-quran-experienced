import { getPricingPlans } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import PricingCard from '@/components/PricingCard'

export const metadata = {
  title: 'Pricing | Najam Academy',
  description: 'Affordable, flexible online Quran class pricing plans.',
}

export default async function PricingPage() {
  const plans = await getPricingPlans()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Affordable Plans"
        title="Simple, Flexible Pricing"
        subtitle="Choose a plan that fits your schedule and learning goals. Every plan starts with a free trial class."
      />
      {plans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No pricing plans available yet.</p>
      )}
    </div>
  )
}