import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <LogoContainer>
        <EducatersText>Educater's</EducatersText>
      </LogoContainer>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <NavLinks open={isOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/careers">Careers</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <LoginButton>
          Log In
          <ArrowIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21.75 12m0 0l-4.5 5.25M21.75 12H3" />
          </ArrowIcon>
        </LoginButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

// ---------------- Styled Components ----------------

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 2rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EducatersText = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(to right, #000000, #434343);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;

  span {
    height: 3px;
    width: 25px;
    background: #000;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    background: white;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    display: ${({ open }) => (open ? "flex" : "none")};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #111;
  transition: color 0.2s ease;

  &:hover {
    color: #f59e0b;
  }
`;

const LoginButton = styled.button`
  padding: 0.6rem 1.25rem;
  background: linear-gradient(90deg, #facc15, #fbbf24);
  color: #111827;
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ArrowIcon = styled.svg`
  width: 1rem;
  height: 1rem;
`;
