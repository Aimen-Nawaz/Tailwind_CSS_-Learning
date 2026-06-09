import React from "react";
import { useFilter } from "../../context/FilterContext";

const PostSearch = () => {
  const { query, setQuery, sortBy, setSortBy, orderBy, setOrderBy } = useFilter();
  return (
    <div className="flex gap-4 mb-6 text-white ">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border p-2 rounded bg-mist-950"
      >
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="views">Views</option>
      </select>

      <select
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
        className="border p-2 rounded bg-mist-950"
      >
        <option value="">Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default PostSearch;