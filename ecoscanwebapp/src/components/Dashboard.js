import React, { useState } from 'react';
import { BASE_URL } from '../baseUrl';
import CarbonScore from './CarbonScore';
import EcoReward from './EcoReward';
import SpecialOfferCard from "./SpecialOfferCard";
import { FaCloudUploadAlt } from 'react-icons/fa'; 
import "./Index.css";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [result, setResult] = useState(null);
  const baseUrl = BASE_URL;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

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
    } finally {
      setUploading(false);
      setUploadProgress(100);
    }
  };

  return (
    <div className="container">
    <div className="container mt-5 pt-5 d-flex flex-column justify-content-center align-items-center min-vh-100  text-white">
      <div className="card p-4" style={{
      width: '500px',
      backgroundImage: 'linear-gradient(135deg, #1010cb, #761be5)',
      color: '#fff',
      borderRadius: '15px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
    }}>
        <h5 className="card-title text-center">Upload Image</h5>
        <form onSubmit={handleSubmit} className="text-center">
          <div
            className={`form-group mb-3 p-4 border border-primary rounded ${dragActive ? 'drag-active' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{ cursor: 'pointer', position: 'relative', transition: 'all 0.3s ease-in-out' }}
          >
            <FaCloudUploadAlt size={50} color="#007bff" className="mb-3" />
            <label htmlFor="fileUpload" className="form-label" style={{ display: 'block', color: 'black', fontSize: '18px' }}>
              Drag files here or <span className="text-primary">browse</span>
            </label>
            <input
              type="file"
              id="fileUpload"
              onChange={handleFileChange}
              accept="image/*"
              className="form-control-file"
              style={{ display: 'none' }}
            />
            {file && <p className="mt-2 text-muted">{file.name}</p>}
          </div>

          {uploading && (
            <div className="progress mb-3">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${uploadProgress}%` }}
                aria-valuenow={uploadProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {uploadProgress}%
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100" disabled={uploading}>
            {uploading ? "Processing..." : "Check Carbon Footprint"}
          </button>
        </form>
      </div>
      {result && <h3 className='introduction p-5 '>
        Scroll Down↓
        </h3>}
    </div>
    <div>
    {result && (
          <div className="mt-4 text-center ">
            <h6 className='text-white navHeading fs-3'>Scan Result!</h6>
            <div className="results mt-3 ">
              <CarbonScore totalCarbonScore={result.totalCarbonScore} />
              <EcoReward
                ecoRewardPoints={result.ecoRewardPoints}
                recognizedItems={result.recognizedItems}
              />
              <SpecialOfferCard/>
            </div>
          </div>
        )}
    </div>
    </div>
  );
};

export default Dashboard;
