import { categories } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Categories</p>
      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category, index) => (
          <div
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
            key={index}
            className={`group cursor-pointer py-5 px-3 rounded-lg gap-2 flex flex-col items-center justify-center`}
            style={{ backgroundColor: category.bgColor }}
          >
            <img
              src={category.image}
              alt=""
              className="max-w-20 transition group-hover:scale-110"
            />
            <p className="text-sm font-medium text-center">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;