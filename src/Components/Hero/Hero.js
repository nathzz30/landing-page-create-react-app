import React from "react";
import "./Hero.css";

const Hero = ({ heroTitle, heroText, heroSubTitle, heroImage }) => {
  return (
    <div className="hero">
      <div className="images">
        {/* <h1 className="heroTitle">{heroTitle}</h1> */}
        <img src={heroImage} alt=" " />
      </div>
      <div className="texts">
        <h2 className="heroTitle">{heroTitle}</h2>
        <h6 className="heroSubTitle">{heroSubTitle}</h6>
        <p className="heroText">{heroText}</p>
        <button className="heroButton">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Hero;
