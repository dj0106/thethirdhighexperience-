export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Shoonya Meditation",
      description: "The ancient art of becoming nothing. Experience profound depths of consciousness.",
      price: "$99",
      duration: "4 weeks"
    },
    {
      id: 2,
      title: "AUM Chanting",
      description: "Connect with the cosmic vibration through traditional AUM chanting practices.",
      price: "$79",
      duration: "3 weeks"
    },
    {
      id: 3,
      title: "Mandukya Upanishad",
      description: "Explore the timeless wisdom of consciousness through ancient texts.",
      price: "$129",
      duration: "6 weeks"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
          Courses
        </h2>
        <p className="text-xl md:text-2xl text-white/80 font-light">
          Deepen your practice with guided learning
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="group">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 transform group-hover:scale-105">
              <h3 className="text-2xl font-light text-white mb-4">
                {course.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-400 font-semibold text-lg">
                  {course.price}
                </span>
                <span className="text-white/60 text-sm">
                  {course.duration}
                </span>
              </div>

              {/* Enroll Button */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
