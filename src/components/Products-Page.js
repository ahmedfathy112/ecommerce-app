import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { AddToCart } from "../rtk/slices/cart-slice";

function ProductPage() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h2 className="text-3xl text-center pt-28 bg-[#494d60] text-yellow-50 font-serif font-bold">
        Our Products
      </h2>
      <section className="w-full flex justify-center flex-wrap pt-14 flex-row bg-[#494d60] min-h-screen">
        {products.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="w-1/4 m-4 p-5 bg-[#22293b] rounded-2xl h-auto max-md:w-fit"
              >
                <img
                  className="w-full h-56 rounded-2xl
          "
                  src={product.image}
                ></img>
                <div className="flex flex-col justify-start mt-2">
                  <h3 className="text-2xl text-yellow-50 font-serif font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-xl text-yellow-50 font-semibold">
                    <i className="fa-solid fa-star text-yellow-300 mr-3"></i>
                    {product?.rating?.rate}
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <p className="mt-3 text-2xl font-mono font-semibold text-yellow-50">
                    {product.price}$
                  </p>
                  <button
                    onClick={() => {
                      dispatch(AddToCart(product));
                    }}
                    className="border-none outline-none rounded-xl p-3 text-xl text-yellow-50 bg-[#2b63e4]"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default ProductPage;
