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
import CartProvider from "./context/CartContext";
import Users from "./components/User/Users";
import PartyForm from "./components/User/PartyForm";
import Contact from"./components/User/Contact";

function App() {
  return (
    <BrowserRouter>
      <PageProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<PageLayout />}>

              <Route index element={<HomePage />} />

              {/* product Routes */}
              <Route path="products" element={<FilterProvider><Product /></FilterProvider>} />
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Post Routes */}
              <Route path="posts" element={<FilterProvider><Posts /></FilterProvider>} />
              <Route path="post/:id" element={<PostDetails />} />
 
              <Route path="users" element={<Users  />} />
              <Route path="form" element={<PartyForm/>} />
               <Route path="registration" element={<Contact/>}/>

            </Route>
          </Routes>
        </CartProvider>
      </PageProvider>
    </BrowserRouter>
  );
}

export default App;