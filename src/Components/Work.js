import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoDate = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur.Non tincidunt nagna non etelit.",
    },
    {
      image: ChooseMeals,
      title: "Choose How often",
      text: "Lorem ipsum dolor sit amet consectetur.Non tincidunt nagna non etelit.",
    },
    {
      image: DeliveryMeals,
      title: "Fast deliveriies",
      text: "Lorem ipsum dolor sit amet consectetur.Non tincidunt nagna non etelit.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Work</h1>
        <p className="primary-text">
          Loren ipsum dolor sit anet consectetur. Non tincidunt nagna non et
          elit. Dolor turpis noiestie dui nagnis facilisis at fringiiia quan.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoDate.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="DataImage" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
