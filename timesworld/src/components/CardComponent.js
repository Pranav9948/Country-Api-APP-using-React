import React from "react";
import './CardComponent.css'
const CardComponent = ({dat,index}) => {
  return (
   
    
    <div className="cardComponent mt-2" style={{marginTop:"50px"}} key={index}>
      <div className="card_img">
        <img src={dat.flag} alt="img" />
      </div>

      <div>
        <h3>{dat.name}</h3>
        <p>{dat.region}</p>
      </div>
    </div>
    
    
  );
};

export default CardComponent;
