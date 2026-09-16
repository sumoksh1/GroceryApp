import ProductCard from "./ProductCard";
import useAppStore from "../store/appStore";

const BestSeller = () => {
  const products = useAppStore((state) => state.products);

  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Best Sellers</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 ">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
  console.log("BestSeller products:", products);
};

export default BestSeller;