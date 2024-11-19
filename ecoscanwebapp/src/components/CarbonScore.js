import React from "react";

const CarbonScore = ({ totalCarbonScore }) => (
  <div className="card carbon-score mx-auto my-3 p-3 fs-4 text-white" style={{
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(135deg, #1010cb, #761be5)',
  }}>
  <div className="d-flex justify-content-between align-items-center">
    <h5 className="mb-0 ">Total Carbon Score</h5>
    <p className="mb-0  fs-4 fw-bold">{totalCarbonScore}</p>
  </div>
</div>

);

export default CarbonScore;
