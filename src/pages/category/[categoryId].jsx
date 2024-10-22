import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/Item/ItemCard";
import { Title } from "../../components/shared/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItems } from "../../redux/category/getCategoryItems";

const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { categoryItems, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryItems(categoryId));
  }, [categoryId, dispatch]);

  const categoryName = useMemo(() => {
    return categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
  }, [categoryId]);

  return (
    <div>
      <Title name={categoryName} />
      <div className="w-full flex flex-wrap justify-center ">
        {!loading ? (
          categoryItems.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Category;
