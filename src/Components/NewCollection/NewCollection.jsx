import React from "react";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
import { Item } from "../Item/Item";

export const NewCollection = () => {
  return (
    <div className="new-collections">
      <div class="lines">
        <span class="line"></span>
        <p class="text-p">ARUAL</p>
        <span class="line"></span>
      </div>
      <h2 class="sub-title">NUEVA COLECCIÓN</h2>

      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
