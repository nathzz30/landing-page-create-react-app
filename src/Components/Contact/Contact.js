import React from "react";
import "./Contact.css";

const Contact = ({ icon, info }) => {
  return (
    <div className="container">
      <i className={icon} />
      <p className="info">{info}</p>
    </div>
  );
};

export default Contact;
