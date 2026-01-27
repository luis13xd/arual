import React, { useContext } from 'react';
import './Css/Category.css';
import { HomeContext } from '../Context/HomeContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const Category = (props) => {
  const { all_product } = useContext(HomeContext);

  return (
    <div className='shop-category'>
      {/* <div className="shopcategory-indexSort">
        <p>
          <span>Mostrar 1-12 de {all_product.length} productos</span> 
        </p>
        <div className="shopcategory-sort">
          Filtrar<img src={dropdown_icon} alt="mostrar" />
        </div>
      </div> */}

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                offer={item.offer}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
