import "./OneProducts.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//ACTIONS
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartAction";

const OneProduct = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  //traigo el estado del store y desestructuro las propiedades de las acciones de los reducers
  const productsDetails = useSelector((state) => state.getProductDetail);
  const { loading, error, product } = productsDetails;

  useEffect(() => {
    //si hay produc y el match id es distinto ahi envio la accion de nuevo, sino no
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const add = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="prod">
      {loading ? (
        <h2>Cargando...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="product-left">
            <div className="image-left">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="left-info">
              <p className="left-name">{product.name}</p>

              <p>{product.description}</p>
            </div>
            <div className="product-right">
              <div className="right-info">
                <p>
                  precio: <span>${product.price}</span>
                </p>
                <p>
                  status:{" "}
                  <span>{product.stock > 0 ? "En Stock" : "sin Stock"}</span>
                </p>
                <p>
                  cantidad:
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.stock).keys()].map((elem) => (
                      <option key={elem + 1} value={elem + 1}>
                        {elem + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button type="button" onClick={add}>
                    Anadir al carrito
                  </button>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OneProduct;
