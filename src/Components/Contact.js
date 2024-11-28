import { ClassNames } from "@emotion/react";
import React from "react";

const Contact = () => {
  return (
    <div ClassName="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Healp You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
