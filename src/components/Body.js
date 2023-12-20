// Body.js
import React from 'react';
import logo from "../data/logo.png" 
import Card from './Card';// Assuming Profile component is extracted from App.js

const Body = () => {
    const bodyStyle = {
        backgroundImage: `url(${logo})`,
        backgroundSize: '216px 60px', // Adjust this value to make the logo smaller
        backgroundRepeat: 'repeat', // Repeat both horizontally and vertically
        backgroundPosition: 'left center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "16px",
      };
  return (
    <div style={bodyStyle}>
      <Card />
      {/* Other body content */}
    </div>
  );
};

export default Body;
