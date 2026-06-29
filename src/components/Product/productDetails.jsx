import React from "react";
import { useCart } from "../../store/CartStore";
import { toast } from "sonner";

const productDetails = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!");
  };
  return (
    <div className="w-1/2 text-white mt-9 items-center">

      <h2 className="text-xl font-bold">{product.title}</h2>

      <p className="text-green-500 font-bold text-lg mt-2">
        ${product.price}
      </p>

      <p className="text-gray-300 mt-4">
        {product.description}
      </p>

      <p className="text-gray-300 mt-4">
        Stock: {product.stock}
      </p>

      <p className="text-gray-500 font-bold text-lg mt-2 flex">
        Brand: {product.brand}
      </p>

      <p className="text-gray-500 font-bold text-lg mt-2 flex">
        Category: {product.category}
      </p>

      <input
        type="text"
        placeholder="Ships in 3-5 working days"
        className="w-full rounded-lg bg-[#272626] border border-gray-700 px-4 py-2 text-sm text-white mt-4"
      />

      <button className="w-full mt-4 bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200" onClick={handleAddToCart} >
        Add to Cart
      </button>

    </div>
  );
};

export default productDetails;