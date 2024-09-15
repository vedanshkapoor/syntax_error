import React from 'react';
import { Link } from 'react-router-dom'; 
import roadImage from './road.png';
import roadImage2 from './road2.png';
import roadImage3 from './road3.png';
import roadImage4 from './roads_C.jpeg'
import './Report.css'; // Importing the CSS

function Report() {
  return (
    <div className="report-container">
      <h1 className="report-title">Road Network Analysis Report</h1>
      <p className="report-text">This report presents the analysis of the road network. The analysis includes various network
      metrics, distribution of road lengths, and node centralities. The report is generated based on the
      road network data for the specified region.</p>

      <p className="report-section-title">1. Road Network Visualization</p>
      <img 
        src={roadImage} 
        alt="Road Network Visualization" 
        className="report-image"
      />

      <p className="report-section-title">2. Road Length Distribution</p>
      <img 
        src={roadImage2} 
        alt="Road Length Distribution" 
        className="report-image"
      />

      <p className="report-section-title">3. Network Metrics</p>
      <p className="report-text">Total Length of Roads: 3810073.61 meters</p>
      <p className="report-text">Number of Connected Components: 1</p>
      <p className="report-text">Size of the Largest Component: 2276 nodes</p>
      <p className="report-text">Network Density: 0.0011</p>
      <p className="report-text">Average Length of Road Segments: 1303.93 meters</p>

      <p className="report-section-title">4. Node Centrality Measures</p>
      <p className="report-text">Node ID: 2361317873.0, Degree Centrality: 0.0013, Betweenness Centrality: 0.2889</p>
      <p className="report-text">Node ID: 5519539941.0, Degree Centrality: 0.0013, Betweenness Centrality: 0.2849</p>

      <p className="report-text">Node ID: 7653354423.0, Degree Centrality: 0.0013, Betweenness Centrality: 0.2822</p>
      <p className="report-text">Node ID: 5519539992.0, Degree Centrality: 0.0013, Betweenness Centrality: 0.2820</p>
      <p className="report-text">Node ID: 7690212487.0, Degree Centrality: 0.0013, Betweenness Centrality: 0.2676</p>

      <p className="report-section-title">5. Shortest Path Analysis</p>
      <p className="report-text">Shortest path length between nodes 245769278 and 299471783: 48348.39 meters</p>

      <p className="report-section-title">6. Degree Distribution</p>
      <img 
        src={roadImage3} 
        alt="Degree Distribution Visualization" 
        className="report-image"
      />

      <p className="report-section-title">7. Conclusion</p>
      <p className="report-text">The road network analysis provides insights into the overall connectivity and quality of the road network in the region. Key findings include:</p>
      <ul className="report-list">
        <li>The total length of roads is 3810073.61 meters, indicating the extent of the road infrastructure.</li>
        <li>The network consists of 1 connected component, with the largest component having 2276 nodes.</li>
        <li>The network density of 0.0011 reflects the compactness of the road network.</li>
        <li>The average road segment length is 1303.93 meters, which helps understand the typical road segment size.</li>
      </ul>

      <p className="report-text">The top 5 nodes with the highest betweenness centrality are crucial for network connectivity and should be monitored for maintenance or upgrades.</p>

     
      <br/>

      <h2> Possibility of feasible and non-feasible data</h2>
      <img 
        src={roadImage4} 
        alt="Road Network Visualization" 
        className="report-image"
      />
       <div className="button-container">
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Report;
