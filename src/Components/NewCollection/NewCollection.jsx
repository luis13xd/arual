import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
import { Item } from "../Item/Item";

export const NewCollection = () => {
  return (
    <div className="new-collections">
      <div className="lines">
        <span className="line"></span>
        <p className="text-p">ARUAL</p>
        <span className="line"></span>
      </div>
      <h2 className="sub-title">NUEVA COLECCIÓN</h2>

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
              offer={item.offer}
            />
          );
        })}
      </div>
    </div>
  );
};
