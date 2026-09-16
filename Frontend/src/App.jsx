import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import MyOrders from "./pages/MyOrders";
import useAppStore from "./store/appStore";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  // const isSeller = useAppStore((state) => state.isSeller);
  const showUserLogin = useAppStore((state) => state.showUserLogin);
  const isSellerPath = useLocation().pathname.includes("seller");
  const fetchProducts = useAppStore((state) => state.fetchProducts);

  fetchProducts();
  return (
    <div className="text-default min-h-screen">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <Toaster></Toaster>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
