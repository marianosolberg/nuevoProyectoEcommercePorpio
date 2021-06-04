import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const changeQty = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    //qtt es un string por eso agregamos Number
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSub = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <div className="cartt">
      <div className="cartt-left">
        <h2>Carro de compras</h2>

        {cartItems.length === 0 ? (
          <div>
            Tu Carrito esta vacio
            <Link to="/">Volver</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              changeQty={changeQty}
              removeCart={removeCart}
            />
          ))
        )}
      </div>
      <div className="cartt-right">
        <div className="cartt-info">
          <p>Subtotal ({getCartCount()}) item </p>
          <p>$ {getCartSub().toFixed(2)}</p>
        </div>
        <div>
          <button>Realizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
