import React, { createContext, useEffect, useState } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
      } catch (err) {
        console.error("Error during Fetching", err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();

        setAllCategory([...data, "all"]);
      } catch (error) {
        console.error("Error during Fetching", error);
      }
    };

    fetchCategories();
  }, []);

  return <ProductContext.Provider value={{ products, allCategory }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
