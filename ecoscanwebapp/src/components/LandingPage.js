import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css'; // Ensure you import the CSS file here
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container pt-5 mt-5">
      <div className="container text-center pt-5 text-white">
        <div className="content">
          <h1 className="typing heading" style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome to EcoScan!</h1>
          <h3 style={{ marginTop: "10px", marginBottom: "20px" }}>A Reewild product</h3>
          <div className="container p-5 fs-4 row">
            <div className="col-md-6 introduction">
            Welcome to EcoScan – a powerful tool that helps you understand the environmental impact of your clothing choices. By simply uploading an image, you can discover the carbon footprint of your garments, from production to disposal. With EcoScan, making eco-conscious fashion decisions becomes effortless, promoting sustainability and reducing waste. Start tracking your clothing’s carbon footprint today and take meaningful steps towards a greener, more sustainable future.
            </div>
            <div className="col-md-6">
              <img src={process.env.PUBLIC_URL + 'clothing-line-Photoroom.png'} alt="Cloths" />
            </div>
          </div>
        </div>
        <div>
          <Link to={"/dashboard"}>
          <button className="btn btn-outline-light mt-3 btn-lg">Get Started</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
