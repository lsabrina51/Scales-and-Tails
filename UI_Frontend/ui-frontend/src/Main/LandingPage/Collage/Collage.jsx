import React from "react";
import "./Collage.css";
import cat3 from "../../../assets/cat3.jpeg"
import cat4 from "../../../assets/cat4.jpg"
import cat5 from "../../../assets/cat5.jpg"
import cat6 from "../../../assets/cat6.jpg"

const Collage = () => {
  return (
    <div className="collage-container">
      <div className="collage-row">
        <img src= {cat4} alt="Image 1" className="collage-img" />
        <img src= {cat3} alt="Image 2" className="collage-img" />
      </div>
      {/* <div className="collage-row">
        <img src={cat2} alt="Image 3" className="collage-img" />
        <img src={cat1} alt="Image 4" className="collage-img" />
      </div> */}
      <div className="collage-row">
        <img src= {cat5} alt="Image 5" className="collage-img" />
        <img src= {cat6} alt="Image 6" className="collage-img" />
      </div>
    </div>
  );
};

export default Collage;
