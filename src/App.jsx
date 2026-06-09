// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./components/layouts/PageLayout";
import Product from "./components/Product/Product";
import HomePage from "./components/HeroPage/HomePage";
import ProductDetail from "./components/Product/ProductDetail";
import Posts from "./components/Posts/Posts"
import PostDetails from "./components/Posts/PostDetails";
import PageProvider from "./context/PageContext";
import FilterProvider from "./context/FilterContext";

function App() {
  return (
    <BrowserRouter>
      <PageProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>

            <Route index element={<HomePage />} />

            {/* product Routes */}
            <Route path="products" element={<FilterProvider><Product/></FilterProvider>} /> 
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Post Routes */}
            <Route path="posts" element={<FilterProvider><Posts /></FilterProvider>} />
            <Route path="post/:id" element={<PostDetails />} />

            <Route path="users" element={<p>Users</p>} />

          </Route>
        </Routes>
      </PageProvider>
    </BrowserRouter>
  );
}

export default App;