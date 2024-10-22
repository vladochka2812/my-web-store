import React from "react";
import { useDispatch } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import { addToCart, removeFromCart } from "../../redux/cart/cartActions";

export const ItemInCart = ({ item }) => {
  const { title, image, price, id, amount } = item;
  const dispatch = useDispatch();

  return (
    item && (
      <div className="flex gap-5 md:w-[50%] my-6">
        <img src={image} alt={`item-${id}`} className="w-28 h-36" />
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
            <h3>{title}</h3>
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
