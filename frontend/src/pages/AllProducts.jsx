import ProductCard from "../components/ProductCard";
import useAppStore from "../store/appStore";

const AllProducts = () => {
  const products = useAppStore((state) => state.products);
  const searchQuery = useAppStore((state) => state.searchQuery);
  const filteredProducts =
    searchQuery.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : products;

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
      </div>

      <div className="w-16 h-0.5 bg-primary rounded-full"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 mt-6">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
