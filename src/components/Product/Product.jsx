import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductHeader from "./ProductHeader";
import ProductSearch from "./ProductSearch";
import ProductGrid from "./ProductGrid";
import Loader from "../pageLoader/pageLoader";
import NotFound from "../pageLoader/notFound";
import Pagination from "../Pagination";
import { usePage } from "../../context/PageContext";
import { useFilter } from "../../context/FilterContext";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { query, sortBy, orderBy, category } = useFilter();



  const { page, skip, limit, setTotal } = usePage()




  const getProducts = async () => {
    try {
      setLoading(true);

      let baseURL = "https://dummyjson.com/products";


      if (query) {
        baseURL = `https://dummyjson.com/products/search?q=${query}`;
      }
      else if (category !== "all") {
        baseURL = `https://dummyjson.com/products/category/${category}`;
      }

      const params = new URLSearchParams();

      if (sortBy) {
        params.append("sortBy", sortBy);
        params.append("order", orderBy);
      }

      params.append("limit", limit);
      params.append("skip", skip);

      const url = `${baseURL.includes("?") ? `${baseURL}&` : `${baseURL}?`}${params.toString()}`;

      console.log("API URL:", url);

      const res = await axios.get(url);

      setProducts(res.data.products || []);
      setTotal(res.data.total || 0);
    } catch (err) {
      console.error("Error:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    getProducts();
  }, [query, sortBy, orderBy, category, page, limit, skip]);

  if (loading && !query && !sortBy) return <Loader />;
  if (!products) return <NotFound />;

  return (
    <div className="w-full px-8 py-6 bg-[#0f0f0f] text-white min-h-screen">
      <ProductHeader />

      <ProductSearch />
      {(query || sortBy || category !== "all") && loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <NotFound />
      )}
      <Pagination />
    </div>
  );
};

export default Product;