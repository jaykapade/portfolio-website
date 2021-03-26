import React from "react";
//Styles
import styled from "styled-components";
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
//Sections
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        <span>FAQs</span>: Any Questions?
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              odit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              odit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              odit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Products Offered">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              odit.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  h2 {
    padding-bottom: 3rem;
    font-weight: bold;
  }

  .question {
    cursor: pointer;
    h4 {
      font-weight: lighter;
      font-size: 1.75rem;
    }
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1.5rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 1.5rem 0rem;
    p {
      padding: 0.5rem 0rem;
      font-size: 1rem;
    }
  }
`;

export default FaqSection;
