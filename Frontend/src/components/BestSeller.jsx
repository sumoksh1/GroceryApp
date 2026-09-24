import ProductCard from "./ProductCard";
import useAppStore from "../store/appStore";

const BestSeller = () => {
  const products = useAppStore((state) => state.products);

  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Best Sellers</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 ">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;