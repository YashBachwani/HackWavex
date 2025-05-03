import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Testimonials from './components/Testimonials';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

// Optional: wrap the main homepage components into a Home component
const Home = () => (
  <>
    <HeroSection />
    <Testimonials />
    <Teachers id="teachers" />  {/* Add id for Teachers section */}
    <Courses id="courses" />    {/* Add id for Courses section */}
    <Contact id="contact" />    {/* Add id for Contact section */}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
