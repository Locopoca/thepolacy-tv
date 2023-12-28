import React, { useState } from "react";
import materials from "../data/cids.json";
import "../App.css";

const CIDList = ({ onSelectCid }) => {
  const [isFolded, setIsFolded] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  const handleAuthorSelect = (author) => {
    setSelectedAuthor(author);
  };

  const filteredMaterials = selectedAuthor
    ? materials.filter((material) => material.Author === selectedAuthor)
    : materials;

  return (
    <div className="cid-list-container">
      <div className="buttons-container">
        <button onClick={toggleFold} className="connect-btn">
          {isFolded ? "Poka sowe" : "Schowaj w kieszeń"}
        </button>
        <button onClick={() => handleAuthorSelect("")} className="connect-btn">
          {selectedAuthor || "Wybierz autora"}
        </button>
      </div>
      {!isFolded && (
        <div>
          <div className="author-list">
            {Array.from(
              new Set(materials.map((material) => material.Author))
            ).map((author) => (
              <button
                key={author}
                onClick={() => handleAuthorSelect(author)}
                className="author-btn"
              >
                {author}
              </button>
            ))}
          </div>
          <div className="scrollable-list">
            <ul className="cid-list">
              {filteredMaterials.map((material) => (
                <li
                  key={material.CID}
                  onClick={() => onSelectCid(material.CID)}
                >
                  <div className="material-info">
                    {material.Title} by {material.Author}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CIDList;
