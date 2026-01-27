import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    
    const formatCurrency = (price) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };
    
    return (
      <div className="item">
        
        {props.offer && <div className="offer-badge">OFERTA</div>}

        <Link to={`/product/${props.id}`}>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={props.image}
            alt="imagen"
          />
        </Link>

        <p>{props.name}</p>

        <div className="item-prices">
          <div className="item-price-new">
            {formatCurrency(props.new_price)}
          </div>

          <div className="item-price-old">
            {formatCurrency(props.old_price)}
          </div>
        </div>
      </div>
    );
}