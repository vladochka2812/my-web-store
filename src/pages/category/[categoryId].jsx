import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/ItemCard/ItemCard";

const Category = () => {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState();

  const fetchCategoryProducts = async (category) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/category/${category}`
      );
      if (!response.ok) {
        console.log("Response doesn't seem to be ok");
      }
      const data = await response.json();
      console.log(data);
      setCategoryProducts(data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  useEffect(() => {
    fetchCategoryProducts(categoryId);
    console.log(categoryProducts);
  }, [categoryId]);
  return (
    <div className="w-full flex flex-wrap justify-center ">
      {categoryProducts &&
        categoryProducts.map((product) => (
          <ItemCard key={product.id} item={product} />
        ))}
    </div>
  );
};

export default Category;
