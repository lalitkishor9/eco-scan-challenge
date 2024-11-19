import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand navHeading">EcoScan</div>
        <Link to={"/dashboard"}>
        <button className="btn btn-outline-light ms-auto">Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
