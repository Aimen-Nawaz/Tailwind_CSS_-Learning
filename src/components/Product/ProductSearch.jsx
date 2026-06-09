import React, { useEffect } from "react";
import { useFilter } from "../../context/FilterContext";
import axios from "axios";

const ProductSearch = () => {
const { query, setQuery,  categories, setCategories, category, setCategory, sortBy, setSortBy, orderBy, setOrderBy } = useFilter();
  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      setCategories(res.data || []);
    } catch (err) {
      console.error("Category Error:", err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSort = (e) => {
    const value = e.target.value;

    if (!value) {
      setSortBy("");
      setOrderBy("");
      return;
    }

    const [sort, order] = value.split("-");
    setSortBy(sort);
    setOrderBy(order);
  };

  return (
    <div className="flex items-center mb-6 gap-4 flex-wrap">

      <input
        type="text"
        value={query}
        placeholder="Search products..."
        onChange={handleChange}
        className="w-[260px] rounded-lg bg-[#1a1a1a] border border-gray-700 px-4 py-2 text-sm text-white outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-lg bg-[#1a1a1a] border border-gray-700 px-4 py-2 text-sm text-white outline-none"
      >
        <option value="all">All Categories</option>

        {categories?.map((cat, index) => {
          const value =
            typeof cat === "object"
              ? cat.slug || cat.name
              : cat;

          const label =
            typeof cat === "object"
              ? cat.name || cat.slug
              : cat;

          return (
            <option key={value || index} value={value}>
              {label}
            </option>
          );
        })}
      </select>


      <select
        value={`${sortBy}-${orderBy}`}
        onChange={handleSort}
        className="rounded-lg bg-[#1a1a1a] border border-gray-700 px-4 py-2 text-sm text-white outline-none"
      >
        <option value="">Sort By</option>
        <option value="title-asc">Title A-Z</option>
        <option value="title-desc">Title Z-A</option>
      </select>

      <select
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
        className="rounded-lg bg-[#1a1a1a] border border-gray-700 px-4 py-2 text-sm text-white outline-none"
      >
        <option value="">Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

    </div>
  );
};

export default ProductSearch;