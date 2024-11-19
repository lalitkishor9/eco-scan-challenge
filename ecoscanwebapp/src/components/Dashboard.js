import React, { useState } from 'react';
import {BASE_URL} from '../baseUrl';
import CarbonScore from "./CarbonScore";
import EcoReward from "./EcoReward";
const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const baseUrl = BASE_URL;
  console.log(BASE_URL);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!file) {
      console.error("No file selected");
      return;
    }
    
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData, file);
    console.log("hi");
    try {
      const response = await fetch(`${baseUrl}/api/images/process`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading image");
      }

      const data = await response.json();
      setResult(data); 
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="file-upload">
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload</button>
      </form>

      {result && (
        <div>
          <h3>Upload Successful!</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {result && (
        <div className="results">
          <CarbonScore totalCarbonScore={result.totalCarbonScore} />
          <EcoReward
            ecoRewardPoints={result.ecoRewardPoints}
            recognizedItems={result.recognizedItems}
          />
        </div>)}
    </div>
  );
};

export default Dashboard;
