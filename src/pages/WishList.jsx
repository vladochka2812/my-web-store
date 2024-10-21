import React, { useEffect, useState } from "react";
import { Title } from "../components/shared/Title/Title";
import { getItemsByIds } from "../functions/getItemsByIds";
import { useDispatch, useSelector } from "react-redux";
import { ItemCard } from "../components/Item/ItemCard";
import { IoTrashOutline } from "react-icons/io5";
import { cleanWishList } from "../redux/wishList/wishListSlice";
import { EmptyMessage } from "../components/EmptyMessage/EmptyMessage";

const WishList = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishList);

  useEffect(() => {
    getItemsByIds({ items, setData });
  }, [items]);

  return (
    <div>
      <Title
        name={
          <span className="flex gap-5">
            Wish list
            <IoTrashOutline
              size={24}
              className="mt-1"
              onClick={() => dispatch(cleanWishList())}
            />
          </span>
        }
      />

      <div className="w-full flex flex-wrap justify-center ">
        {data && data.length > 0 ? (
          data.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <EmptyMessage />
        )}
      </div>
    </div>
  );
};

export default WishList;
