export default function FeaturesStrip() {
  const features = [
    { emoji: '🌍', title: 'No Language Barrier', desc: 'Arabic, English, Urdu & more' },
    { emoji: '🆓', title: 'Free Trial Classes', desc: 'Experience before you pay' },
    { emoji: '📱', title: 'Any Device, Anywhere', desc: 'Learn on PC, mobile, or tablet' },
    { emoji: '🕐', title: '24/7 Helpdesk', desc: 'Support whenever you need it' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
      <div className="bg-white rounded-2xl card-shadow grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="text-3xl mb-2">{f.emoji}</div>
            <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}