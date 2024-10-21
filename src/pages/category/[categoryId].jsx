import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/Item/ItemCard";

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
      setCategoryProducts(data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  useEffect(() => {
    fetchCategoryProducts(categoryId);
  }, [categoryId]);
  return (
    <div>
      <h2 className="w-full flex justify-center text-[24px] font-semibold">
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
      </h2>
      <div className="w-full flex flex-wrap justify-center ">
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
