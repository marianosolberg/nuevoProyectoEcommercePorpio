import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, changeQty, removeCart }) => {
  return (
    <div className="cart-view">
      <div className="cart-image">
        <img src={item.image} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className="cart-item-name">
        <p>{item.name}</p>
      </Link>

      <p className="cart-price">$ {item.price}</p>
      <select
        className="cart-select"
        value={item.qty}
        onChange={(e) => changeQty(item.product, e.target.value)}
      >
        {[...Array(item.stock).keys()].map((elem) => (
          <option key={elem + 1} vlaue={elem + 1}>
            {elem + 1}
          </option>
        ))}
      </select>
      <button className="cart-delete" onClick={() => removeCart(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
