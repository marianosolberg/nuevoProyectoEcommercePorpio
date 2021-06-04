import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import OneProduct from "./Screens/OneProduct";
import Navbar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>
      {/* recibimos un evento click y modificamos el estado de la funcion toggle a true
       */}
      <Navbar click={() => setSideToggle(true)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <Sidebar show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={OneProduct} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
