import React from 'react';
import { Link } from 'react-router-dom';
import myImage from './chamoli.png'; // Update the path to your image
import './Report2.css'; // Importing the CSS

function Report2() {
  return (
    <div className="report2-container">
      <h1 className="report2-title">Data Coordinates Visualization</h1>
      <img 
        src={myImage} 
        alt="Report Visual" 
        className="report2-image"
      />
      <div className="button-container">
        <Link to="/report">
          <button className="report2-button">Go to Report</button>
        </Link>
      </div>
    </div>
  );
}

export default Report2;
