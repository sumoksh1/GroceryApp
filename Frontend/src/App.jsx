import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import MyOrders from "./pages/MyOrders";
import useAppStore from "./store/appStore";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import AddAddress from "./pages/AddAddress";
import { useEffect } from "react";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";

const App = () => {
  const isSeller = useAppStore((state) => state.isSeller);
  const showUserLogin = useAppStore((state) => state.showUserLogin);
  const isSellerPath = useLocation().pathname.includes("seller");
  const fetchProducts = useAppStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}

      <Toaster />

      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : null}></Route>
            <Route path="product-list" element={<ProductList />}></Route>
            <Route path="orders" element={<Orders />}></Route>
          </Route>
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
