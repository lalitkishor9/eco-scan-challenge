import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <>
    <Router>
      <Header />
      <div className="container">
      <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
