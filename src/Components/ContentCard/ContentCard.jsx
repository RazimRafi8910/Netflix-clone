import React from "react";
import "./ContentCard.css";

function ContentCard(props) {
  if (props.right) {
    return (
      <div className="tvsection">
        <div className="container">
          <div className="tvBox">
            <img src={props.image} alt="" className="tvImg" />
          </div>
          <div className="tittle">
            <h1>{props.tittle}</h1>
            <h5>{props.description} </h5>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="tvsection">
      <div className="container">
        <div className="tittle">
          <h1>{props.tittle}</h1>
          <h5>{props.description} </h5>
        </div>
        <div className="tvBox">
          <img src={props.image} alt="" className="tvImg" />
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
