import React, { useContext, useState, useEffect } from 'react';
import './Css/Category.css';
import { HomeContext } from '../Context/HomeContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const Category = (props) => {

  const {all_product} = useContext(HomeContext);

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === props.banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banners[currentBannerIndex]} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrar 1-12</span> de 36 productos
        </p>
        <div className="shopcategory-sort">
          Filtar por <img src={dropdown_icon} alt="mostrar" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => { 
          if (props.category===item.category) {
            return  <div key={i} className="item-wrapper">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Ver más
      </div>

    </div>
  )
}
