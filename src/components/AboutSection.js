import React from "react";
import home1 from "../img/boxer.jpg";
const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              <span>Success</span> usually comes to those
            </h2>
          </div>
          <div className="hide">
            <h2>
              who are too <span>busy</span> to be
            </h2>
          </div>
          <div className="hide">
            <h2> looking for it.</h2>
          </div>
        </div>
        <p>
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum
          culpa quis dolore nihil aspernatur eum et esse similique ratione unde
          hic, sequi laudantium? Aut provident corporis officia quasi quos.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="img">
        <img src={home1} alt="boxer" />
      </div>
    </div>
  );
};

export default About;
