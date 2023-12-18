import React from "react";
import "./rightPanel.css";

const LeftPanel = ({ image1, gift1, gift2, gift3, onClickGift }) => {
  return (
    <>
      <img className="forTheEaster" src={image1} alt="For the Easter Egg" />
      <img
        className="gift1"
        src={gift1}
        alt="Gift1"
        width="150px"
        onClick={() => onClickGift(1)}
      />
      <img
        className="gift2"
        src={gift2}
        alt="Gift2"
        width="130px"
        onClick={() => onClickGift(2)}
      />
      <img
        className="gift3"
        src={gift3}
        alt="Gift3"
        width="90px"
        onClick={() => onClickGift(3)}
      />
    </>
  );
};

export default LeftPanel;
