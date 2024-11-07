import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import new_data from "../Assets/nuevo/new_data";
import { Item } from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      
        <div class="lines">
          <span class="line"></span>
          <p class="text-p">ARUAL</p>
          <span class="line"></span>
        </div>
        <h2 class="sub-title">SPORTS FASHION</h2>

      <div className="popular-item">
        {new_data.map((item, i) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};
