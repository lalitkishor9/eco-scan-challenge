import React, { useState } from "react";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import CarbonScore from "./components/CarbonScore";
import EcoReward from "./components/EcoReward";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="app">
      <Header />
      <FileUpload result = {result} setResult={setResult} />
      {result && (
        <div className="results">
          <CarbonScore totalCarbonScore={result.totalCarbonScore} />
          <EcoReward
            ecoRewardPoints={result.ecoRewardPoints}
            recognizedItems={result.recognizedItems}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
