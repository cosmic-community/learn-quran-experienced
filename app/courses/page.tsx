import { getCourses } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import CourseCard from '@/components/CourseCard'

export const metadata = {
  title: 'Courses | Najam Academy',
  description: 'Explore our online Quran courses for learners of all ages and levels.',
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Our Curriculum"
        title="Online Quran Courses"
        subtitle="From Qaida basics to Tafseer — engaging lessons with personalized guidance and flexible tuition."
      />
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No courses available yet.</p>
      )}
    </div>
  )
}