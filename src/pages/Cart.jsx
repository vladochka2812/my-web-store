import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemInCart } from "../components/Item/ItemInCart";
import { Button } from "../components/shared/Button/Button";
import { Title } from "../components/shared/Title/Title";
import { getItemsByIds } from "../functions/getItemsByIds";
import { EmptyMessage } from "../components/EmptyMessage/EmptyMessage";
import { RoutesList } from "../utilities/routes";
import { useNavigate } from "react-router-dom";
import { cleanCart } from "../redux/cart/cartActions";

const Cart = () => {
  const { items, totalPrice, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState();
  useEffect(() => {
    getItemsByIds({ items, setData });
  }, [items]);

  const handlePlaceOrder = () => {
    dispatch(cleanCart());
    alert("Do you want to place your order");
    navigate(RoutesList.HOME);
  };

  return (
    <div className="flex flex-col px-20">
      <Title name="Cart" />
      {!!data?.length > 0 ? (
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
              <span className="text-[20px] font-medium">
                {totalPrice.toFixed(2)}$
              </span>
            </span>
            <Button onClick={handlePlaceOrder}>Place order</Button>
          </div>
        </>
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
};

export default Cart;
