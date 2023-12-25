// src/components/Card.js
import React from 'react';
import Profile from './Profile'; // Import Body component
import "../App.css"
import NewsBar from './NewsBar';
import text from "../data/data.json";

const Card = () => {
  return (
    <div className="card-container">
      <Profile />
      <NewsBar text={text} />
    </div>
  );
};

export default Card;
