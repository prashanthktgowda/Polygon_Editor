# Three.js Polygon Project

## Overview
This project is a simple web application that utilizes Three.js to create a 2D scene where users can interactively create and manipulate n-sided polygons. The application features a ground plane with grid lines, allowing users to visualize their polygons clearly.

## Project Structure
```
threejs-polygon-project
├── index.html          # Main HTML document
├── styles              # Contains CSS styles
│   └── main.css        # Styles for the project
├── scripts             # Contains JavaScript files
│   ├── main.js         # Entry point of the application
│   ├── SceneManager.js # Manages the scene and user interactions
│   └── classes         # Contains class definitions
│       ├── Polygon.js  # Represents a polygon
│       └── Ground.js   # Represents the ground plane
└── README.md           # Documentation for the project
```

## Setup Instructions
1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to view the application.
3. Ensure you have an internet connection to load the Three.js library from the CDN.

## Usage
- Click on the canvas to place vertices for your polygon.
- Use the "Complete" button to finalize the polygon.
- Use the "Copy" button to replicate the last created polygon, which can be moved and placed.
- Use the "Reset" button to clear all polygons from the scene.

## Features
- Interactive polygon creation with mouse clicks.
- Ability to copy and move polygons.
- Reset functionality to clear the scene.
- A visually appealing ground plane with grid lines for better visualization.

## Technologies Used
- Three.js: A JavaScript library for 3D graphics.
- HTML/CSS: For structuring and styling the web application.
- JavaScript: For implementing the application logic and user interactions.

## Author
[Your Name] (optional)