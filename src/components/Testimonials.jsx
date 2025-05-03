import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const testimonials = [
  {
    name: 'Aisha Khan',
    role: 'High School Student',
    feedback: 'Educater’s helped me boost my confidence and score higher in science!',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Ravi Patel',
    role: 'College Freshman',
    feedback: 'The gamified learning quests kept me engaged and motivated every day.',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Sofia Gomez',
    role: 'Middle School Student',
    feedback: 'I love earning badges and leveling up. It makes learning so much fun!',
    avatar: 'https://i.pravatar.cc/150?img=56'
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12" data-aos="fade-up">
        What Our Students Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
