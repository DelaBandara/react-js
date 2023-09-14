import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The Dela's Pizza is all about fun and good times with people you care about, sharing original Italian pizza, hand-made in the traditional Italian way: thin & crispy, and deliciously baked in the only original wood-fired oven in Sri Lanka, along with a tasty range of authentic Italian food with carefully-sourced fresh ingredients sourced and imported from Italy, is ought to have your tastebuds craving for more, after one bite.
        </p>
      </div>
    </div>
  );
}

export default About;