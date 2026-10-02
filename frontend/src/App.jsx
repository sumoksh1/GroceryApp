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
import Loading from "./components/Loading";

const App = () => {
  const isSeller = useAppStore((state) => state.isSeller);
  const fetchProducts = useAppStore((state) => state.fetchProducts);
  const fetchUser = useAppStore((state) => state.fetchUser);
  const fetchSeller = useAppStore((state) => state.fetchSeller);
  const cartItems = useAppStore((state) => state.cartItems);
  const updateCart = useAppStore((state) => state.updateCart);
  const user = useAppStore((state) => state.user);
  
  const isSellerPath = useLocation().pathname.includes("seller");

  useEffect(() => {
    console.log("effect running");
    fetchUser().then(() => console.log("fetchUser done"));
    fetchProducts().then(() => console.log("fetch products done"));
    fetchSeller().then(() => console.log("fetchSeller done"));
  }, []);

  useEffect(() => {
    if(user) {
      updateCart();
    }
  }, [cartItems])

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      <Auth />

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
          <Route path="/loader" element={<Loading />} />
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
