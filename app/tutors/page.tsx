import { getTutors } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import TutorCard from '@/components/TutorCard'

export const metadata = {
  title: 'Tutors | Najam Academy',
  description: 'Meet our experienced male and female Quran tutors.',
}

export default async function TutorsPage() {
  const tutors = await getTutors()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Our Teachers"
        title="Meet Our Quran Tutors"
        subtitle="Certified, experienced, and dedicated male and female teachers ready to guide you."
      />
      {tutors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No tutors available yet.</p>
      )}
    </div>
  )
}