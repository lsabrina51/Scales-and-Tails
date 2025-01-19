// LandingPage.jsx

import React from "react";
import Collage from "./Collage/Collage"; // Import the Collage component
import TitleAndCaption from "./TitleAndCaption/TitleAndCaption"; // Import the TitleAndCaption component
import "./LandingPage.css"; // Add the styles for the landing page

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Collage />
      <TitleAndCaption className="title" />
    </div>
  );
};

export default LandingPage;
