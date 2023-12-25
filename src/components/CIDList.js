import React, { useState } from 'react';
import cids from '../data/cids.json'; // Assuming this is your data source
import "../App.css"

const CIDList = ({ onSelectCid }) => {
  const [isFolded, setIsFolded] = useState(true);

  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div className='cid-list-container'>
      <button onClick={toggleFold} className='connect-btn'>
        {isFolded ? 'Show CIDs' : 'Hide CIDs'}
      </button>
      {!isFolded && (
        <ul className="cid-list">
          {cids.map(cid => (
            <li key={cid} onClick={() => onSelectCid(cid)}>{cid}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CIDList;
