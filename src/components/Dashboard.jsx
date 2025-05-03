import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Image imports
import badge1 from '../images/badge1.jpg';
import badge2 from '../images/badge2.jpg';
import badge3 from '../images/badge3.jpg';
import premiumImage from '../images/dashboard-2.jpg';
import avatar from '../images/avatar.jpg';

const Dashboard = () => {
  const chartRef = useRef(null);
  const [progress, setProgress] = useState({
    'Data Structures': 0,
    'Physics Fundamentals': 0,
    'Marketing Basics': 0
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'XP Gained',
            data: [120, 200, 310, 480, 600, 740, 900],
            fill: true,
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            pointBackgroundColor: '#4f46e5',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          animation: {
            duration: 2000,
            easing: 'easeOutBounce'
          },
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'XP Growth This Week'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'XP Points'
              }
            }
          }
        }
      });
    }
  }, []);

  // Animate progress bars
  useEffect(() => {
    setTimeout(() => {
      setProgress({
        'Data Structures': 680,
        'Physics Fundamentals': 540,
        'Marketing Basics': 320
      });
    }, 500);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#dbe3ff] via-[#f4defa] to-[#ffe1d4] min-h-screen p-6 font-[Outfit]">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 border-r flex flex-col" data-aos="fade-right">
          <div className="text-2xl font-bold mb-10">📘 Educater's</div>
          <nav className="space-y-6">
            {['📅 Dashboard', '📚 My Courses', '📈 Progress', '💬 Messages', '⚙️ Settings'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">{item}</div>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <button className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-medium">
              🔓 Log out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8" data-aos="fade-up">
          {/* Top Bar */}
          <div className="flex justify-between items-center" data-aos="fade-down">
            <input type="text" placeholder="Search..." className="px-4 py-2 border border-gray-300 rounded-full w-1/3" />
            <div className="flex items-center gap-2">
              <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
              <div>
                <div className="font-semibold">Jeet Pitale</div>
                <div className="text-xs text-gray-500">Level 5 • 2100 XP</div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white shadow p-6 rounded-xl border-2" data-aos="zoom-in">
            <h4 className="font-semibold mb-4">🏆 Weekly Leaderboard</h4>
            <ul className="space-y-3">
              {[{ name: 'Sophia Zhang', xp: 2500, medal: '🥇', bg: 'bg-yellow-100' },
                { name: 'Liam Rodriguez', xp: 2300, medal: '🥈', bg: 'bg-gray-100' },
                { name: 'Jeet Pitale', xp: 2100, medal: '🥉', bg: 'bg-orange-100' }].map(({ name, xp, medal, bg }, i) => (
                <li key={i} className={`flex justify-between items-center p-3 ${bg} rounded-xl shadow border`}>
                  <span className="font-semibold">{medal} {name}</span>
                  <span className="text-sm text-gray-700">{xp} XP</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow p-6 rounded-xl border-2" data-aos="zoom-in-up">
              <h4 className="font-semibold mb-4">📈 XP Progress</h4>
              <canvas ref={chartRef} height="120"></canvas>
            </div>
            <div className="bg-white shadow p-6 rounded-xl border-2" data-aos="zoom-in-down">
              <h4 className="font-semibold mb-4">🎯 Subject Tracker</h4>
              {Object.entries(progress).map(([subject, xp]) => {
                const percentage = `${(xp / 1000) * 100}%`;
                return (
                  <div key={subject} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{subject}</span><span>{xp}/1000 XP</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: percentage }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-72 bg-white p-6 border-l space-y-4" data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-2">🎓 Enrolled Courses</h3>
          <div className="space-y-3">
            {[{ name: 'Intro to Machine Learning', hours: 38 },
              { name: 'Creative Writing Workshop', hours: 28 },
              { name: 'Fundamentals of Finance', hours: 32 }].map((course, i) => (
              <div key={i} className="bg-[#f6f6f9] p-4 rounded-xl flex justify-between items-center border">
                <span>{course.name}</span><span className="text-sm text-gray-500">{course.hours} hrs</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">🏅 Earned Badges</h4>
            <div className="flex gap-2">
              {[badge1, badge2, badge3].map((badge, i) => (
                <img key={i} src={badge} alt={`Badge ${i + 1}`} className="w-8 h-8" />
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-4 rounded-xl mt-6 text-center h-52">
            <p className="font-bold mb-2">Upgrade to Premium →</p>
            <img src={premiumImage} alt="Premium" className="mx-auto h-36" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
