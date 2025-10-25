import React from "react";
import styled from "styled-components";
import Background from "../three/Background.jsx"; 

const education = [
  {
    icon: '🎓',
    degree: 'B.Sc. Computer Science',
    university: 'Jerusalem College Of Engineering',
    period: '2024 - Present',
    description: 'Direct entry to an M.Sc. in Software Engineering',
    descriptionColor: '#FFD700' 
  },
  {
    icon: '🎓',
    degree: 'B.A in Education',
    university: 'David Yellin Academic College of Education',
    period: '2022 - 2024',
    description: 'Specialization in Electronics, Computers, and Mathematics',
    descriptionColor: '#FFD700' 

  },
  {
    icon: '🎓',
    degree: 'Practical Software Engineering',
    university: 'The College of Management Academic Studies',
    period: '2020 - 2023',
    description: ''
  },
  {
    icon: '🎓',
    degree: 'Practical Electronics Engineering',
    university: 'ORT Colleges',
    period: '2018 - 2020',
    description: ''
  }
];

const certifications = [
  {
    icon: '📜',
    course: 'Full Stack Web Development',
    school: 'Udemy',
    year: '2024',
    description: 'Certification covering frontend, backend, databases, and deployment using modern web technologies.',
    descriptionColor: '#FFD700' 
  },
  {
    icon: '📜',
    course: 'AWS Certified Developer',
    school: 'Udemy',
    year: '2025',
    description: 'Completed Udemy course on AWS cloud application development, deployment, and management.',
    descriptionColor: '#FFD700' 
  },
  {
    icon: '📜',
    course: 'Decoding Devops',
    school: 'Udemy',
    year: '2025',
    description: 'DevOps principles with AI-powered automation',
    descriptionColor: '#FFD700' 
  }
];

const EducationOrbs = () => {
  return (
    <Wrapper>
      <Background />

      {/* Degrees */}
      <Section>
        <SectionTitle>Degrees</SectionTitle>
        <OrbsContainer>
          {education.map((edu, index) => (
            <Orb key={index}>
              <Icon>{edu.icon}</Icon>
              <Degree>{edu.degree}</Degree>
              <University>{edu.university}</University>
              <Period>{edu.period}</Period>
              {edu.description && (
                <Description style={{ color: edu.descriptionColor || '#aaa' }}>
                  {edu.description}
                </Description>
              )}
            </Orb>
          ))}
        </OrbsContainer>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionTitle>Certifications</SectionTitle>
        <OrbsContainer>
          {certifications.map((cert, index) => (
            <Orb key={index}>
              <Icon>{cert.icon}</Icon>
              <Degree>{cert.course}</Degree>
              <University>{cert.school}</University>
              <Period>{cert.year}</Period>
              {cert.description && (
                <Description style={{ color: cert.descriptionColor || '#aaa' }}>
                    {cert.description}
                </Description>
)}

            </Orb>
          ))}
        </OrbsContainer>
      </Section>
    </Wrapper>
  );
};

export default EducationOrbs;

// ===== Styled Components =====
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 2rem;
  overflow: hidden;

  canvas {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    z-index: 0;
  }
`;

const Section = styled.div`
  margin-bottom: 6rem;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #FFD700;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const OrbsContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Orb = styled.div`
  width: 240px;
  height: 240px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  box-shadow: 0 0 20px #b9a327cb, 0 0 30px #c4a72433;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  cursor: pointer;
  padding: 0.8rem;           
  box-sizing: border-box;     
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.25);
    box-shadow: 0 0 50px #FFD700, 0 0 60px #c1ab2a88;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Degree = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: #FFD700;
  margin-bottom: 0.3rem;
  word-wrap: break-word;  
  overflow-wrap: break-word;
`;

const University = styled.div`
  font-size: 0.8rem;
  color: #fff;
  margin-bottom: 0.2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Period = styled.div`
  font-size: 0.75rem;
  color: #ccc;
`;

const Description = styled.div`
  font-size: 0.7rem;
  color: ${(props) => props.color || '#aaa'};
  margin-top: 0.2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;