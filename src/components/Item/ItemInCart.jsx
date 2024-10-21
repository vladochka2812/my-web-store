import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getItem } from "../../functions/getItem";
import { IoTrashOutline } from "react-icons/io5";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";

export const ItemInCart = ({ item }) => {
  const { amount, id, price } = item;
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await getItem({ id, setData });
    };
    fetchData();
  }, [id]);

  return (
    data && (
      <div className="flex gap-5 md:w-[50%] my-6">
        <img src={data.image} className="w-28 h-36" />
        <div className="flex flex-col w-full justify-around">
          <div>
            <span
              className="flex justify-end"
              onClick={() => {
                dispatch(removeFromCart({ id, removeCompletely: true }));
              }}
            >
              <IoTrashOutline size={24} />
            </span>
            <h3>{data.title}</h3>
            <h4 className="text-[16px] font-semibold">{price} $</h4>
          </div>

          <div className="flex text-[18px] gap-4">
            <button
              className="bg-transparent text-black"
              onClick={() => {
                dispatch(removeFromCart({ id }));
              }}
            >
              -
            </button>
            <span>{amount}</span>
            <button
              className="bg-transparent text-black"
              onClick={() => {
                dispatch(addToCart({ id, price }));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  );
};
