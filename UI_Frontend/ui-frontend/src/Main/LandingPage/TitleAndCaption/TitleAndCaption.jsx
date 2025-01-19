import React from "react";
import "./TitleAndCaption.css";
//import backgroundImg from "../../../assets/cat1.jpg"; 

const TitleAndCaption = () => {
  return (
    <div className="title-container">
      <div className="overlay">
        <h1 className="title">Fish and Paws</h1>
        <p className="caption">Know your pet</p>
      </div>
    </div>
  );
};

export default TitleAndCaption;
