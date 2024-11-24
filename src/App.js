// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import NavigationBar from './components/NavigationBar'; // Import Navbar component from 'components' folder
import HomePage from './components/Home';


const App = () => {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <NavigationBar /> 
      
      <div className="container mt-4">
        <Routes>
          {/* Define Routes for your pages here */}
          <Route path="/" element={<HomePage></HomePage>} />
          {/* <Route path="/community" element={<h1>Community Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} /> */}
          {/* Add other pages here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
