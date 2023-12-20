// Header.js

import React from 'react';
import "../App.css"
import logo from '../data/logo.png';

const Header = () => {
  const bodyStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: '216px 60px', // Adjust this value to make the logo smaller
    backgroundRepeat: 'repeat', // Repeat both horizontally and vertically
    backgroundPosition: 'left center',
    minHeight: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "16px",
  };
  return (
    <header className="header">
      <div className={bodyStyle} src={logo}>
      </div>

    </header>
  );
};

export default Header;
