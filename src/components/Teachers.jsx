import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teachers = [
  {
    name: 'Yash Bachwani',
    subject: 'Mathematics',
    experience: '8 years',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    badge: 'Top Instructor',
    rating: 4.9,
  },
  {
    name: 'Dhanvi Thakkar',
    subject: 'Physics',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    badge: 'Student Favorite',
    rating: 4.8,
  },
  {
    name: 'Jeet Pitale',
    subject: 'Biology',
    experience: '5 years',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    badge: 'Rising Star',
    rating: 4.7,
  },
];

const Teachers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-20 bg-gradient-to-br from-yellow-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="teachers"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        data-aos="fade-down"
      >
        Meet Our Educators
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center transition-transform transform hover:scale-105"
            data-aos="zoom-in-up"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-28 h-28 rounded-full mx-auto border-4 border-yellow-400 mb-4"
            />
            <h3 className="text-xl font-semibold">{teacher.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{teacher.subject}</p>

            {/* Badge */}
            <span className="inline-block mt-2 px-3 py-1 text-xs bg-yellow-300 text-black rounded-full font-medium">
              {teacher.badge}
            </span>

            {/* Experience & Rating */}
            <div className="mt-3 text-sm">
              <p>Experience: <strong>{teacher.experience}</strong></p>
              <p>Rating: <span className="text-yellow-500 font-semibold">{teacher.rating} ★</span></p>
            </div>

            {/* Button */}
            <button className="mt-4 px-5 py-2 text-sm bg-purple-500 hover:bg-purple-600 text-white rounded-full transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
