import React from 'react';

const SpecialOfferCard = () => {
  return (
    <div
      className="card mx-auto my-3 text-white"
      style={{
        maxWidth: '500px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundImage: 'linear-gradient(135deg, #1010cb, #761be5)',
      }}
    >
      <div className="card-body">
        <h5 className="card-title fs-4 fw-bold">Special Offers</h5>
        <p className="card-text fs-5">20% Off Next Purchase</p>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
