import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "../components/Product";

import { getAllProducts as listProducts } from "../redux/actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="home-title">NUESTROS PRODUCTOS</h2>
      <div className="home-products">
        {loading ? (
          <h2>Cargando...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => {
            //le paso por param a product.js que es el producto que renderizo aca
            return (
              <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
