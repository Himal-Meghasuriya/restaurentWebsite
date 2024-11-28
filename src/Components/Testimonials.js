import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { ClassNames } from "@emotion/react";
import { dividerClasses } from "@mui/material";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Loren ipsum dolor sit anet consectetur. Non tincidunt nagna non et
          elit. Dolor turpis noiestie dui nagnis facilisis at fringiiia quan.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="ProfilePic" />
        <p>
          Loren ipsum dolor sit anet consectetur. Non tincidunt nagna non et
          elit. Dolor turpis noiestie dui nagnis facilisis at fringiiia quan.
        </p>
        <div className="testimonial-star-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>john Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
