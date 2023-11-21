import axios from "axios";
import { useState } from "react";

function AddProduct() {
  const [name, getName] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(0);
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [ID, setID] = useState(0);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/Products", {
        title: name,
        price: price,
        description,
        image: url,
        id: ID,
        rating: {
          rate,
          count,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <h2 className="pt-28 text-center bg-[#494d60] text-yellow-50 text-2xl font-serif font-bold">
        Add Product
      </h2>
      <form
        className="w-full min-h-screen pb-20 bg-[#494d60] flex flex-col justify-between items-center pt-6"
        onSubmit={formSubmit}
      >
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product ID
          </label>
          <input
            form="ProductName"
            type="number"
            placeholder="ID"
            className="outline-none p-2 w-64 rounded-2xl"
            onChange={(e) => {
              setID(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product Name
          </label>
          <input
            form="ProductName"
            type="text"
            placeholder="Name"
            className="outline-none p-2 w-64 rounded-2xl"
            onChange={(e) => {
              getName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product Price
          </label>
          <input
            form="ProductName"
            type="number"
            placeholder="Price"
            className="outline-none p-2 w-64 rounded-2xl"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product Rating
          </label>
          <input
            form="ProductName"
            type="number"
            placeholder="Rate"
            className="outline-none p-2 w-64 rounded-2xl"
            onChange={(e) => {
              setRate(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product Count
          </label>
          <input
            form="ProductName"
            type="number"
            placeholder="Count"
            className="outline-none p-2 w-64 rounded-2xl"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product Image
          </label>
          <input
            form="ProductName"
            type="text"
            placeholder="Image URL"
            className="outline-none p-2 w-64 rounded-2xl"
            onChange={(e) => {
              setURL(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label
            from="ProductName"
            className="border-red-600 p-2 text-lg text-center text-yellow-50 font-sans font-semibold rounded-2xl mr-4 border-2"
          >
            Product Description
          </label>
          <textarea
            placeholder="Description"
            className="outline-none p-2 w-80 h-52 rounded-2xl"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="text-orange-400 bg-slate-900 text-xl p-3 rounded-2xl">
          Add The Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
