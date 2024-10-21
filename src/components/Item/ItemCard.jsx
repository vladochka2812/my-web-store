import React, { useState } from "react";
import { IoHeartOutline, IoStarOutline, IoCloseOutline } from "react-icons/io5";
import { Button } from "../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

export const ItemCard = ({ item }) => {
  const { title, description, image, id, price, rating } = item;
  const itemInCart = useSelector((state) => state.cart.items).find(
    (item) => item.id === id
  );
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-[400px] m-12 flex flex-col items-center shadow-xl p-2 rounded-lg relative justify-between">
      <IoHeartOutline size={32} className="absolute top-4 left-2" />
      <div
        className={`${
          showMore ? "absolute" : "hidden"
        } w-full h-full top-0 left-0 bg-black opacity-90 z-20 flex text-justify`}
      >
        <div className="relative z-50 text-white  px-4 py-6">
          <div
            className="absolute top-1 right-1"
            onClick={() => setShowMore(false)}
          >
            <IoCloseOutline size={24} />
          </div>
          {description}
        </div>
      </div>

      <img
        src={image}
        alt={`${title}`}
        className="w-[300px] h-[400px] object-contain"
      />
      <h4 className="w-full text-start text-[16px]">{title}</h4>
      <span className="flex w-full justify-between my-2">
        <span className="flex gap-2">
          <IoStarOutline size={20} />
          {rating.rate}
        </span>
        <h5 className="text-[18px] font-semibold">{price} $</h5>
      </span>
      <div className="flex w-full justify-between gap-2">
        <Button
          className={"bg-gray-200 text-black"}
          onClick={() => setShowMore(true)}
        >
          More info
        </Button>
        <Button onClick={() => dispatch(addToCart({ id, price }))}>
          {itemInCart ? `In cart ${itemInCart.amount}` : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};