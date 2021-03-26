import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade } from "./animation";
//Styled
import styled, { css } from "styled-components";

const ContactUs = () => {
  return (
    <>
      <StyledFormWrapper
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StyledForm variants={fade}>
          <h2>Contact Us</h2>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name: Sachin Tendulkar"
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="email: sachin@gmail.com"
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input type="radio" value="male" name="gender" checked="true" />
              Male
            </label>
            <label>
              <input type="radio" value="female" name="gender" />
              Female
            </label>
          </StyledFieldset>
          <label htmlFor="message">Queries</label>
          <StyledTextArea
            name="message"
            placeholder="Any Issues, Recommendations or Requirements"
          />
          <button type="submit">Send Message</button>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

const sharedStyles = css`
  height: 40px;
  margin: 1rem 0 2rem 0;
  padding: 1.5rem;
  border: 3px solid #23d997;
  box-sizing: border-box;
  border-radius: 10px;
  background: #2b2a2a;
`;

const StyledFormWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0px 20px;
`;

const StyledForm = styled(motion.form)`
  color: white;
  width: 100%;
  max-width: 700px;
  border: 3px solid #23d997;
  padding: 40px;
  background: transparent;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  name: "",
  email: "",
  message: "",
  gender: "",
};

export default ContactUs;
