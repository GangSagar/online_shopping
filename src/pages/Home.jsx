import React, { useContext, useState } from "react";
// Product Context
import { ProductContext } from "../contexts";
// components
import { Hero, Product } from "../components";
import { FiFilter } from "react-icons/fi";

const Home = () => {
  // Catefory State
  const [showCategory, setShowCategory] = useState(false);
  const [currCategory, setCurrCategory] = useState("all");

  // get products from products context
  const { products, allCategory } = useContext(ProductContext);

  // Filtering the Categories
  const filterCategory = products.filter((item) => {
    if (currCategory === "all") {
      return true;
    } else {
      return item.category === currCategory;
    }
  });

  return (
    <div className="scrollbar-thin scrollbar-webkit">
      <Hero />

      {/* Category Buttons */}
      <div className="group relative">
        <div
          onMouseEnter={() => setShowCategory(true)}
          onMouseLeave={() => setShowCategory(false)}
          className={`h-14 flex items-center px-5 lg:px-10 cursor-pointer w-[200px] lg:w-[220px] ${
            showCategory ? "text-red-500" : ""
          }`}>
          <FiFilter className="text-xl" />
          <span className="text-2xl ml-2">Category</span>
        </div>

        <div
          className={`${
            showCategory ? "flex" : "hidden"
          } absolute z-10 gap-y-1 flex-col left-16 bg-gray-100 rounded-b-lg`}
          onMouseEnter={() => setShowCategory(true)}
          onMouseLeave={() => setShowCategory(false)}>
          {allCategory.map((categoryName, index) => {
            return (
              <button
                key={index}
                className="capitalize py-2 hover:bg-gray-300  hover:rounded"
                onClick={() => {
                  setCurrCategory(categoryName);
                }}>
                {categoryName}
              </button>
            );
          })}
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          {/* Products */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 sm:mx-auto"
            id="products">
            {filterCategory &&
              filterCategory.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
