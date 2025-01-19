import React, { useState } from "react";
import "./DemoCards.css";
import axios from "axios";

const DemoCards = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `/api/${selectedDemo}`, // Backend endpoint (replace with actual URL)
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response:", response.data);
      alert("File uploaded successfully!");
      setShowPopup(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload the file.");
    }
  };

  return (
    <div className="card-container">
      {/* Card for Cat Demo */}
      <div
        className="card"
        style={{ backgroundImage: "url('/images/cat.jpg')" }} // Replace with actual image path
      >
        <h2>Cat Demo</h2>
        <button
          onClick={() => {
            setSelectedDemo("cat-demo");
            setShowPopup(true);
          }}
        >
          Demo
        </button>
      </div>

      {/* Card for Fish Demo */}
      <div
        className="card"
        style={{ backgroundImage: "url('/images/fish.jpg')" }} // Replace with actual image path
      >
        <h2>Fish Demo</h2>
        <button
          onClick={() => {
            setSelectedDemo("fish-demo");
            setShowPopup(true);
          }}
        >
          Demo
        </button>
      </div>

      {/* Popup for file upload */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Upload File for {selectedDemo === "cat-demo" ? "Cat" : "Fish"} Demo</h3>
            <input type="file" onChange={handleFileChange} />
            <div className="popup-actions">
              <button onClick={handleUpload}>Upload</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoCards;
