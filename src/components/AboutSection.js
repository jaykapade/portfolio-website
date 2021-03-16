import React from "react";
import home1 from "../img/boxer.jpg";
//Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>
              <span>Success</span> usually comes to those
            </h2>
          </Hide>
          <Hide>
            <h2>
              who are too <span>busy</span> to be
            </h2>
          </Hide>
          <Hide>
            <h2> looking for it.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quis.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="boxer" />
      </Image>
    </About>
  );
};

//Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 80%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
