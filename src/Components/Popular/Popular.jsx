import React from "react";
import "./Popular.css";
import new_data from "../Assets/new_data.js";
import { Item } from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      
        <div className="lines">
          <span className="line"></span>
          <p className="text-p">ARUAL</p>
          <span className="line"></span>
        </div>
        <h2 className="sub-title">SPORTS FASHION</h2>

        <div className="popular-items">
        {new_data.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            image2={item.image2}
            image3={item.image3}
            image4={item.image4}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};