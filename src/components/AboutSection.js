import React from "react";
import home1 from "../img/boxer.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

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

export default AboutSection;
