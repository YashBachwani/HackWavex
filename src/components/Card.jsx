import React from 'react';
import styled from 'styled-components';

// Styled components for TeacherCard
const TeacherCardContainer = styled.div`
  width: 320px;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.9); /* Slight transparency */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TeacherCardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fef3c7; /* Soft yellow */
`;

const TeacherImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #fbbf24;
`;

const TeacherInfo = styled.div`
  margin-left: 1rem;
`;

const TeacherName = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

const TeacherLevel = styled.p`
  color: #6366f1; /* Indigo */
  font-size: 0.875rem;
  font-weight: 500;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: center;
`;

const Badge = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fbbf24; /* Yellow background */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -25px;
    font-size: 0.75rem;
    color: #333;
    background-color: #fff;
    padding: 0.25rem;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover:after {
    opacity: 1;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e5e7eb; /* Light gray */
  border-radius: 1rem;
  height: 8px;
  margin-top: 1rem;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.progress || '0%'};
  background-color: #fbbf24; /* Yellow */
  height: 100%;
  border-radius: 1rem;
`;

const ProgressText = styled.p`
  color: #777;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Description = styled.p`
  color: #555;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const ProfileLink = styled.a`
  display: block;
  text-align: center;
  color: #fbbf24; /* Yellow */
  font-weight: bold;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    color: #6366f1; /* Indigo */
  }
`;

// TeacherCard Component
const TeacherCard = ({ name, image, level, xp, progress, description, badges }) => {
  return (
    <TeacherCardContainer>
      <TeacherCardHeader>
        <TeacherImage src={image} alt={`${name}'s profile`} />
        <TeacherInfo>
          <TeacherName>{name}</TeacherName>
          <TeacherLevel>Level {level} • {xp} XP</TeacherLevel>
        </TeacherInfo>
      </TeacherCardHeader>

      {/* Badges */}
      <BadgeContainer>
        {badges.map((badge, index) => (
          <Badge key={index} data-tooltip={badge.tooltip}>
            <img src={badge.img} alt={`badge-${index}`} style={{ width: '24px', height: '24px' }} />
          </Badge>
        ))}
      </BadgeContainer>

      {/* Progress Bar */}
      <ProgressBarContainer>
        <ProgressBarFill progress={progress} />
      </ProgressBarContainer>
      <ProgressText>Progress to Level {level + 1}: {progress}</ProgressText>

      {/* Description */}
      <Description>{description}</Description>

      {/* Profile Link */}
      <ProfileLink href="#">View Profile →</ProfileLink>
    </TeacherCardContainer>
  );
};

// Teacher Session Component
const TeacherSession = () => {
  const teachers = [
    {
      name: "Yash Bachwani",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      level: 4,
      xp: 1800,
      progress: "60%",
      description: "Yash has completed multiple quests and earned elite badges for creative achievements!",
      badges: [
        {
          img: "https://cdn-icons-png.flaticon.com/512/2583/2583317.png",
          tooltip: "Badge of Creativity"
        },
        {
          img: "https://cdn-icons-png.flaticon.com/512/2583/2583340.png",
          tooltip: "Badge of Excellence"
        },
        {
          img: "https://cdn-icons-png.flaticon.com/512/2583/2583313.png",
          tooltip: "Badge of Persistence"
        }
      ]
    },
    // Add more teachers here if needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>
  );
};

export default TeacherSession;
