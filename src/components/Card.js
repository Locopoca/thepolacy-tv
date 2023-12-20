// src/components/Card.js
import React from 'react';
import Profile from './Profile'; // Import Body component
import "../App.css"

const Card = () => {
  return (
    <div className="card-container">
      <Profile />
    </div>
  );
};

export default Card;
