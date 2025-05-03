import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer
      className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-10 px-6 md:px-20 text-gray-800 dark:text-gray-300 transition-colors"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">Educater&apos;s</h3>
          <p className="text-sm">
            Empowering learners through interactive experiences, gamified content, and expert instruction. Join us on your journey to knowledge!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Courses</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Teachers</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">Email: support@educaters.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Address: 123 Learning St, Knowledge City</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Educater&apos;s. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
