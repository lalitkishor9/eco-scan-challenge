import React from "react";

const EcoReward = ({ ecoRewardPoints, recognizedItems }) => (
  <div className="card eco-reward mx-auto my-3 p-3 text-white" style={{
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(135deg, #1010cb, #761be5)',
  }}>
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center">
      <h5 className="card-title fs-4 fw-bold">Eco-Reward Points</h5>
      <p className="fw-bold fs-4 mb-0">{ecoRewardPoints}</p>
    </div>
    <h6 className="card-subtitle fs-4 mt-3">Recognized Items:</h6>
    <ul className="list-unstyled fs-5">
      {recognizedItems.map((item, index) => (
        <li key={index} className="mb-1">{item}</li>
      ))}
    </ul>
  </div>
</div>


);

export default EcoReward;
