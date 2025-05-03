import React from 'react';
import styled from 'styled-components';

// Styled components for the form and button
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: #4b5563; /* Slate color */
  padding-bottom: 1rem;
  text-align: center;
`;

const SubHeading = styled.p`
  color: #fbbf24; /* Yellow */
  font-weight: 700;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #374151; /* Darker gray for the label */
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 2px solid #fbbf24; /* Yellow border */
  border-radius: 0.375rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6366f1; /* Indigo on focus */
    box-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 2px solid #fbbf24; /* Yellow border */
  border-radius: 0.375rem;
  outline: none;
  resize: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6366f1; /* Indigo on focus */
    box-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
  }
`;

const XPButton = styled.button`
  background-color: #fbbf24; /* Yellow */
  color: black;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 9999px;
  margin-top: 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f59e0b; /* Darker Yellow on hover */
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ContactQuestForm = () => {
  return (
    <FormContainer>
      <SubHeading>📬 Send Us Your Quest</SubHeading>
      <Heading>Get in Touch & Earn XP!</Heading>
      <p className="text-sm text-gray-500 text-center pb-10">
        Every message brings you closer to your next badge.
        <br />
        Let's level up together! 🚀
      </p>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <InputLabel htmlFor="name">📝 Your Adventurer Name</InputLabel>
          <InputField
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="w-full">
          <InputLabel htmlFor="email">📧 Your Guild Email</InputLabel>
          <InputField
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <InputLabel htmlFor="message">💬 Your Message Quest</InputLabel>
        <TextAreaField
          id="message"
          name="message"
          required
        ></TextAreaField>
      </div>

      {/* XP Button */}
      <XPButton type="submit">
        🚀 Send & Earn 50 XP
      </XPButton>
    </FormContainer>
  );
};

export default ContactQuestForm;
