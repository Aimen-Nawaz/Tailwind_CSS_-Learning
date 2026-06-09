import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};

const FilterProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");

  return (
    <FilterContext.Provider
      value={{ query,setQuery,sortBy,setSortBy, orderBy,setOrderBy, categories,setCategories,category,setCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;