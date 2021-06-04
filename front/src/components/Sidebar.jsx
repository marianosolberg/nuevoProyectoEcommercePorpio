import "./Sidebar.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Sidebar = ({ show, click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const cartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const SidebarClass = ["sidebar"];

  if (show) {
    SidebarClass.push("show");
  }
  return (
    <div className={SidebarClass.join(" ")}>
      <ul className="sidebar-links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              CART <span className="sidebar-cart">{cartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">SHOP</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
