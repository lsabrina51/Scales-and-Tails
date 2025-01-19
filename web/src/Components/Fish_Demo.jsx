import React, { useState } from "react"; 
import "./Demo.css" 

function Fish_Demo() {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (

    
    <div className="Upload">
        <section>
        <h1>Fish Species Identifier</h1>
        <p class = "directions">
            <ol>
                <li>Upload a picture of your fish</li>
                <li>Click on the "Identify" button</li>
            </ol>
        </p>
        </section>

        <section>
          <h2>Upload Your Fish Image:</h2>
          <img src={file} />
          <br></br>
          
          <label htmlFor="upload-btn">Choose File</label>
            <input
                type="file"
                onChange={handleChange}
                id="upload-btn"
                accept="image/*"
            />
        </section>
        <br></br>

            <section class = "result">
                <div>
                    <h3>Result: </h3>
                    <p>Insert result here</p>
                </div>
            </section>


    </div>
  );
}

export default Fish_Demo;