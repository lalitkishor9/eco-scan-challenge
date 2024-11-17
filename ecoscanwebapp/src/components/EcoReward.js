import React from "react";

const EcoReward = ({ ecoRewardPoints, recognizedItems }) => (
  <div className="eco-reward">
    <h2>Eco-Reward Points</h2>
    <p>{ecoRewardPoints}</p>
    <h3>Recognized Items:</h3>
    <ul>
      {recognizedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default EcoReward;
