import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="h-[580px] flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 text-gray-800">
      {/* Mascot Avatar */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
        alt="Mascot"
        className="w-24 h-24 rounded-full border-4 border-white mb-4 animate-bounce"
        data-aos="zoom-in"
        data-aos-duration="1200"
      />

      {/* Welcome Message */}
      <h1
        className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Welcome to Educater&apos;s!
      </h1>
      <p
        className="max-w-xl text-center mt-4 px-4"
        data-aos="fade-up"
        data-aos-duration="1800"
        data-aos-delay="200"
      >
        Educater's where the knowledge has no walls and our teachers are always here to guide you on your learning journey.
      </p>

      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-4 mt-6 mb-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
        <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '30%' }}></div>
      </div>
      <p className="text-sm text-gray-700" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
        Beginner Learner - 300 XP
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <button
          className="px-7 py-3 rounded bg-yellow-300 text-black font-bold shadow-md transform hover:scale-105 transition"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          Start Learning Quest
        </button>
        <button
          className="group px-7 py-2.5 flex items-center gap-2 font-medium border border-gray-300 rounded hover:bg-gray-00 hover:text-black transition"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          View Achievements
          <svg
            className="group-hover:translate-x-1 transition pt-0.5"
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
