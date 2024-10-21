import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ItemInCart } from "../components/Item/ItemInCart";
import { Button } from "../components/shared/Button/Button";
import { Title } from "../components/shared/Title/Title";
import { getItemsByIds } from "../functions/getItemsByIds";
import { EmptyMessage } from "../components/EmptyMessage/EmptyMessage";

const Cart = () => {
  const { items, totalPrice, totalAmount } = useSelector((state) => state.cart);
  const [data, setData] = useState();
  useEffect(() => {
    getItemsByIds({ items, setData });
  }, [items]);

  return (
    <div className="flex flex-col px-20">
      <Title name="Cart" />
      {data.length > 0 ? (
        <>
          <div>
            {data.map((item) => (
              <ItemInCart key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col fixed top-40 right-20 w-[30%] gap-4 text-[20px] bg-gray-100 p-5">
            <span className="flex justify-between items-center">
              <span>Total amount of items: </span>
              <span className="font-medium">{totalAmount}pcs</span>
            </span>
            <span className="flex justify-between items-center">
              <span>Total price:</span>
              <span className="text-[20px] font-medium">{totalPrice}$</span>
            </span>
            <Button>Place order</Button>
          </div>
        </>
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
};

export default Cart;
