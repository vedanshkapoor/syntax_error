

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const submitForm = () => {
    // Redirect to Google Earth page on form submission
    navigate('/report1');
  };

  return (
    <div className="background">
      <div className="overlay">
      <h1>Sadak Dakshata</h1>
        <div className="form-container">
          <label className="naming" chtmlFor="district">Select District:</label>
          <select id="district">
            <option value="district1">Chamoli</option>
            {/* <option value="district2">District 2</option> */}
            {/* Add more options as needed */}
          </select>
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
