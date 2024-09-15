
deploment link -   https://bhoomigoyal.github.io/website_dep/


Project Overview
This project aims to analyze and predict road network connectivity using a combination of machine learning, geographic data, and API-based distance and elevation calculations. The project involves:

Loading and analyzing road networks from OpenStreetMap (OSM).
Fetching altitude data using the Google Elevation API.
Calculating distances and slopes using the Google Distance Matrix API.
Integrating curvature calculations based on road geometry.
Applying the Floyd-Warshall algorithm for shortest path computations based on the slope and curvature.


Key Features
Road Network Loading: Utilizes the OSMnx library to load and visualize the road network of Chamoli district, India.
Altitude Fetching: Retrieves altitude data for nodes in the road network using the Google Elevation API.
Distance Calculation: Computes the distance between nodes using the Google Distance Matrix API.
Slope Calculation: Computes slope for each road segment based on altitude difference and distance.
Curvature Calculation: Computes road curvature based on geometric properties of the road segments.
Shortest Path Computation: Uses the Floyd-Warshall algorithm to compute shortest paths considering slope.
Visualization: Displays the road network graphically without edge weights.


Tech Stack
This project uses a variety of technologies and libraries to achieve its goals:

Libraries and Tools
Python: The primary programming language used for scripting and data analysis.
OSMnx: For downloading, modeling, and visualizing street networks from OpenStreetMap.
NetworkX: For creating, manipulating, and analyzing complex networks and graphs.
Matplotlib: For visualizing the road network graphically.
Pandas: For data manipulation and analysis, particularly with CSV files.
Requests: For making HTTP requests to external APIs.
Shapely: For geometric operations and curvature calculations.
APIs
Google Maps Elevation API: Provides altitude data for coordinates.
Google Maps Distance Matrix API: Calculates distances between geographical coordinates.
Algorithms
Floyd-Warshall Algorithm: Used for finding shortest paths in weighted graphs based on slope data.
Data Sources
OpenStreetMap (OSM): Provides the road network data used in the analysis.
CSV File: Contains latitude and longitude coordinates for altitude and distance calculations.
Development Environment
Python Version: 3.x (Specify exact version if needed)
IDE: (Specify if you're using an IDE like PyCharm or VS Code)
Operating System: (Specify if relevant, e.g., Windows, Linux)


Results
SRTM-DEM Dataset Creation:

Created a comprehensive dataset for the SRTM-DEM data covering the entire Uttarakhand state.
Feasibility of Connectivity:

Analyzed the feasibility of connecting new nodes within the Chamoli district, considering slope and distance constraints.
Road Network Report:

Generated a detailed report on the condition of the existing road network in the Chamoli district, highlighting areas of concern and potential improvements.

sources
google earth,
nasa earth dataset,
GPS Visualizer, 
QGIS



