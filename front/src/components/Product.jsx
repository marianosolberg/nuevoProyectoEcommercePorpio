import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ name, price, image, description, productId }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />

      <div className="product-info">
        <p className="info-name">{name}</p>
        <p className="info-description">{description}</p>
        <p className="info-price">${price}</p>
        <Link to={`/product/${productId}`} className="info-button">
          ver
        </Link>
      </div>
    </div>
  );
};

export default Product;
