import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { RadioButtonCheckedOutlined } from "@mui/icons-material";

const About = ({ aboutRef }) => {
  return (
    <div className="about-section-container" ref={aboutRef}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="AboutBackground" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="AboutBackgroundImage" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Loren ipsum dolor sit anet consectetur. Non tincidunt nagna non et
          elit. Dolor turpis noiestie dui nagnis facilisis at fringiiia quan.
        </p>
        <p className="primary-text">
          Non tincidunt •agna non et eiit. Dolor turpis miestie dui nagnis
          facilisis at fringiiia quan.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            {" "}
            Watch Video <BsFillPlayCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
