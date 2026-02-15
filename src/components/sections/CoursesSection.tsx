import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Podcast",
      description: "Listen to transformative conversations on consciousness, awakening, and spiritual growth. Deep insights delivered to your ears.",
      link: "https://www.youtube.com/@THEGreatSpiritualAwakening2027/videos"
    },
    {
      id: 2,
      title: "E-book",
      description: "A comprehensive digital guide to meditation, mindfulness, and the journey to higher consciousness. Read, reflect, and transform.",
      link: "https://rzp.io/rzp/thethirdbook"
    },
    {
      id: 3,
      title: "Amazon Find",
      description: "Curated spiritual tools, meditation essentials, and consciousness-expanding products. Handpicked treasures for your awakening journey.",
      link: "https://amzn.in/d/gvXojEK"
    }
  ];

  const courseImages: Record<number, string> = {
    1: assetUrl("/images/icons/CourseImage1.png"),
    2: assetUrl("/images/icons/CourseImage2.png"),
    3: assetUrl("/images/icons/CourseImage3.png"),
  };

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
          <div key={course.id} className="group h-full">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 transform group-hover:scale-105 h-full flex flex-col">
              {/* Course Image (edge-to-edge, covers card bounds) */}
              <div className="relative -mx-6 -mt-6 h-48 md:h-56 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src={courseImages[course.id]}
                  alt={course.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center"
                  priority={course.id === 1}
                />
              </div>

              <h3 className="text-2xl font-light text-white mb-4">
                {course.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed flex-grow">
                {course.description}
              </p>

              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition-colors text-center block"
              >
                Explore Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
