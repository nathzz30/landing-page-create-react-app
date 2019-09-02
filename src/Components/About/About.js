import React from "react";
import Contact from "../Contact/Contact";
import "./About.css";

const About = ({ aboutTitle, aboutText, aboutContacts }) => {
  return (
    <div className="about">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossorigin="anonymous"
      />
      <div>
        <h2 className="aboutTitle">{aboutTitle}</h2>
        <hr className="sub" />
        <p className="aboutText">{aboutText}</p>
        <div>
          {aboutContacts.map(contact => {
            return <Contact icon={contact.icon} info={contact.info} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
