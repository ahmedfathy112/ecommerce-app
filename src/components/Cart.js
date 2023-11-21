import { useDispatch, useSelector } from "react-redux";
import { Clear, DeleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <div
        className="pt-28 bg-[#494d60] flex justify-center
      flex-col"
      >
        <h2 className="text-3xl text-center  bg-[#494d60] text-yellow-50 font-serif font-bold">
          Your cart
        </h2>
        <button
          onClick={() => dispatch(Clear([]))}
          className="clearCart mt-6 border-none outline-none w-44 rounded-xl p-3 text-xl text-yellow-50 bg-[#2b63e4]"
        >
          Clear the Cart
        </button>
      </div>
      <main className="w-full flex flex-col justify-center bg-[#494d60] min-h-screen">
        <section className="w-full p-4 flex flex-col justify-center">
          {cart.map((productCart) => {
            return (
              <>
                <div className="flex bg-teal-600 flex-row justify-between rounded-xl p-4 m-4 border-slate-400 border-2 max-md:flex-col max-md:justify-center">
                  <img
                    src={productCart.image}
                    className="w-32 h-28 rounded-2xl max-md:w-full max-md:h-1/3"
                  ></img>
                  <div className="flex flex-col justify-between max-md:mt-5 max-md:mb-5">
                    <h3 className="text-xl text-yellow-50 font-serif font-bold w-64">
                      {productCart.title}
                    </h3>
                    <p className="text-2xl text-yellow-100 font-mono font-bold">
                      Price: {productCart.price}$
                    </p>
                    <p className="text-2xl text-yellow-100 font-mono font-bold">
                      Count: {productCart.quantity}
                    </p>
                  </div>
                  <div className="flex  align-middle">
                    <button
                      onClick={() => dispatch(DeleteFromCart(productCart))}
                      className="border-none outline-none rounded-xl p-3 text-xl text-yellow-50 bg-rose-700 max-md:p-6"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <h4 className="text-2xl text-right font-serif font-semibold text-yellow-50">
            Total Price: {totalPrice.toFixed(2)}$
          </h4>
        </section>
      </main>
    </>
  );
}

export default Cart;
