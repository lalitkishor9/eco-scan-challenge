import React, { useState } from 'react';

const ImageUploadForm = ({result, setResult}) => {
  const [file, setFile] = useState(null);

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
      const response = await fetch("http://localhost:3001/api/images/upload", {
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
    </div>
  );
};

export default ImageUploadForm;