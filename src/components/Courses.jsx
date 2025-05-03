import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const courses = [
  {
    title: 'Beginner Physics',
    description: 'Master the basics of motion, forces, and energy through interactive lessons.',
    icon: '📘',
  },
  {
    title: 'Mathematics Mastery',
    description: 'Level up your problem-solving with algebra, geometry, and real-world applications.',
    icon: '📐',
  },
  {
    title: 'Life Science Lab',
    description: 'Explore the wonders of biology and ecosystems with virtual lab activities.',
    icon: '🧬',
  },
  {
    title: 'Creative Writing Quest',
    description: 'Unleash your imagination and earn points for storytelling and journaling.',
    icon: '✍️',
  }
];

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12" data-aos="fade-up">
        Explore Our Courses
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <div className="text-4xl mb-4">{course.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
