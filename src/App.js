import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductPage from "./components/Products-Page";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/Products"
          element={
            <>
              <ProductPage />
            </>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <>
              <Cart />
            </>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <>
              <AddProduct />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
