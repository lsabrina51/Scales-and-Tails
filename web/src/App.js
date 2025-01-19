import './App.css';
import React, { useState } from "react";
import Fish_Demo from './Components/Fish_Demo';
import About from './Components/About'
import Cat_Demo from './Components/Cat_Demo'
import './App.css'; // Custom CSS for the page (optional)
import 'bootstrap/dist/css/bootstrap.min.css';


// import { Router, Routes } from "react-router-dom"

function App() {


  return(
      <div>
        {/* Hero Section (Full-Height Cover) */}
        <section className="hero bg-cover bg-dark text-white d-flex align-items-center justify-content-center">
          <div className="text-center p-5">
            <h1 className="display-4">Fish and Paws</h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-5">
          <h2 className="text-center mb-4">Overview</h2>
          <p className="text-center">
            This project contains two demos: 
            <ul>
              <li>Fish Species Identifier</li>
              <li>Cat Emotions Identifer</li>
            </ul>

            Click on the Demos on the navigation to learn more.
          </p>
        </section>

    </div>
  ); 
}

export default App;
