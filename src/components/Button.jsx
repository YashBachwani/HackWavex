import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations

// Styled button component
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px gap */
  padding: 0.75rem 1.5rem;
  font-size: 1rem; /* 16px font size */
  font-weight: 600;
  color: #1f2937; /* Dark Gray text color */
  background-color: #facc15; /* Yellow background */
  border-radius: 0.375rem;
  border: 1px solid #facc15;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  /* Hover Effect */
  &:hover {
    background-color: #06B6D4; /* Cyan background on hover */
    color: #ffffff; /* White text color on hover */
    border-color: #06B6D4; /* Cyan border on hover */
    transform: translateY(-2px); /* Lift the button on hover */
  }

  /* Active State (when the button is clicked) */
  &:active {
    transform: scale(0.98); /* Slightly scale down on click */
  }

  /* Focus State */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.5); /* Cyan outline on focus */
  }

  /* AOS animation */
  &[data-aos="fade-up"] {
    animation-duration: 1s;
  }

  /* Responsive button styling for mobile */
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem; /* Adjust padding on mobile */
    font-size: 0.875rem; /* Slightly smaller font size on mobile */
  }
`;

const Button = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animation with 1s duration
  }, []);

  return (
    <div data-aos="fade-up"> {/* AOS Animation */}
      <StyledButton type="button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.13 14.652a.553.553 0 0 1-.78-.78l4.097-4.098a.552.552 0 0 1 .78.78zM5.882 6.95l-2.11 2.887s-.402-.343-1.224-.236C1.332 9.76.816 11.167.56 11.457.295 11.639-.553 9.829.555 8.16c1.872-2.815 5.327-1.21 5.327-1.21m5.169 5.168-2.887 2.11s.343.401.236 1.224c-.16 1.216-1.566 1.731-1.856 1.988-.182.265 1.629 1.112 3.295.005 2.817-1.872 1.212-5.327 1.212-5.327m5.303-6.198c.607-1.365.616-2.753-.07-3.686l.02-.02C17.375 1.145 18.129.16 17.986.018c-.142-.142-1.126.611-2.198 1.682l-.019.02c-.931-.685-2.32-.677-3.683-.071a13.3 13.3 0 0 0 1.895 2.374 13.3 13.3 0 0 0 2.373 1.898"
            fill="#06B6D4"
          />
          <path
            d="M13.363 4.639a14.2 14.2 0 0 1-2.054-2.58 7 7 0 0 0-1.279 1.016c-1.314 1.314-6.163 7.728-6.163 7.728l.865.865 2.305-2.305a1.134 1.134 0 0 1 1.602 1.602L6.334 13.27l.865.865s6.414-4.849 7.728-6.163a7 7 0 0 0 1.018-1.283 14.2 14.2 0 0 1-2.582-2.05m-2.978 2.978A1.355 1.355 0 1 1 12.3 5.7a1.355 1.355 0 0 1-1.916 1.917"
            fill="#06B6D4"
          />
        </svg>
        Explore More &rarr;
      </StyledButton>
    </div>
  );
};

export default Button;
