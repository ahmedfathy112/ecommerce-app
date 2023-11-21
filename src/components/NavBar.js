import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <header className="w-full fixed">
        <nav className="w-full bg-slate-900 flex justify-between p-5">
          <div className="text-3xl text-yellow-50 font-bold max-md:text-xl">
            Golden Store
          </div>
          <div className="flex justify-between">
            <Link
              to="/"
              className="text-lg font-semibold text-yellow-50 mr-4 cursor-pointer max-md:text-base"
            >
              Home
            </Link>
            <Link
              to="/add"
              className="text-lg font-semibold text-yellow-50 mr-4 cursor-pointer max-md:text-base"
            >
              Add Products
            </Link>
            <Link
              to="/products"
              className="text-lg font-semibold text-yellow-50 mr-4 cursor-pointer max-md:text-base"
            >
              Products
            </Link>
          </div>
          <Link
            to="/cart"
            className="text-xl text-yellow-50 font-semibold max-md:text-base"
          >
            <i className="fa-solid fa-cart-shopping fa-bounce text-2xl font-semibold text-yellow-50 cursor-pointer"></i>
            {cart.length}
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
