export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span className="text-sm font-semibold text-accent-600 uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-4 leading-relaxed">{subtitle}</p>}
    </div>
  )
}