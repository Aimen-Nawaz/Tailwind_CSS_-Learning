import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../pageLoader/pageLoader";
import Reviews from "../Reviews/Reviews";
import NotFound from "../pageLoader/notFound";
import Slider from "../Slider/Slider";
import ProductDetails from "./productDetails";
import axios from "axios";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductbyId = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://dummyjson.com/products/${id}?`
      )
      console.log(response)

      setProduct(response.data);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductbyId();
  }, [id]);

  useEffect(() => {
    getProductbyId();
  }, []);

  if (loading) return <Loader />;
  if (!product) return <NotFound />;

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] flex flex-col items-center px-4 py-6">

      <div className="flex gap-6 bg-[#1a1a1a] p-6 rounded-xl w-full max-w-5xl">


        <div className="w-1/2" flex>
          <Slider images={product.images} />
        </div>
        <ProductDetails product={product} />
      </div>

      <Reviews reviews={product?.reviews} />
    </div>
  );
};

export default Product;