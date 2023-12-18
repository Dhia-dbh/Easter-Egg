import React from "react";
import "./leftPanel.css";

const LeftPanel = ({ image, onCategoryChange }) => {
  return (
    <>
      <ul className="list-group">
        <button
          onClick={onCategoryChange}
          className="btn btn-outline-secondary list-group-item"
        >
          Clothes
        </button>
        <button
          onClick={onCategoryChange}
          className="btn btn-outline-secondary list-group-item"
        >
          Decoration
        </button>
        <button
          onClick={onCategoryChange}
          className="btn btn-outline-secondary list-group-item"
        >
          Fourniture
        </button>
      </ul>
      <img src={image} alt="Tree with falling leafs" width="50%" />
    </>
  );
};

export default LeftPanel;
