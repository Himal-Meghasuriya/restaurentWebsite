import React from "react";
import bannerbackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../Assets/home-banner-image.png";
const Home = ({ homeRef }) => {
  return (
    <div className="Home-container" ref={homeRef}>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={bannerbackground} alt="" />
        </div>
        <div className="home-first-section">
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favourite Food Delivered Bot & Fresh
            </h1>
            <p className="primary-text">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
          </div>
          <div className="home-second-section">
            <div className="home-image-container">
              <img src={BannerImage} alt="Food portion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
