import React from "react";
import home1 from "../img/boxer.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../pages/animation";

import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Success</span> usually comes to those
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              who are too <span>busy</span> to be
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> looking for it.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quis.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="boxer" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
