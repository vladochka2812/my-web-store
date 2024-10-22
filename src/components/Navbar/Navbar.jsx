import React, { useEffect, useState } from "react";
import { NavbarLink } from "./NavbarLink";
import {
  IoCartOutline,
  IoHeartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import Logo from "../../images/logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { useSelector } from "react-redux";
import { useLogOut } from "../../functions/useLogOut";

export const Navbar = () => {
  const { totalAmount: cartAmount } = useSelector((state) => state.cart);
  const { items: wishList } = useSelector((state) => state.wishList);

  const [isAuth, setIsAuth] = useState(false);
  const [categories, setCategories] = useState();
  const [wishListLength, setWishListLength] = useState();
  const [cartListLength, setCartListLength] = useState();

  const getCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/categories`
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    setCartListLength(cartAmount || 0);
  }, [cartAmount]);

  useEffect(() => {
    setWishListLength(wishList.length || 0);
  }, [wishList]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center h-[40px] m-5">
          <div className="flex flex-1 gap-6">
            {categories &&
              categories.map((item) => (
                <NavbarLink
                  key={item}
                  name={item.charAt(0).toUpperCase() + item.slice(1)}
                  link={`category/${item}`}
                />
              ))}
          </div>
          <div>
            <NavbarLink
              link={"/"}
              name={
                <img
                  src={Logo}
                  alt="logo"
                  className="object-cover h-10 hover:h-[42px] transition-color"
                />
              }
            />
          </div>
          <div className="flex flex-1 justify-end gap-6">
            {isAuth ? (
              <>
                <NavbarLink
                  link={"/cart"}
                  name={
                    <span className="relative">
                      <IoCartOutline size={26} />
                      {cartListLength !== 0 && (
                        <span className="absolute top-[-10px] right-[-10px] text-[10px] py-1 px-2 bg-gray-200 rounded-full">
                          {cartListLength}
                        </span>
                      )}
                    </span>
                  }
                />
                <NavbarLink
                  link="/wishList"
                  name={
                    <span className="relative">
                      <IoHeartOutline size={26} />
                      {wishListLength !== 0 && (
                        <span className="absolute top-[-10px] right-[-10px] text-[10px] py-1 px-2 bg-gray-200 rounded-full">
                          {wishListLength}
                        </span>
                      )}
                    </span>
                  }
                />
                <IoLogOutOutline size={26} onClick={useLogOut} />
              </>
            ) : (
              <>
                <span className="flex gap-2">
                  <NavbarLink link={"/signUp"} name="Sign Up" />
                  <span>/</span>
                  <NavbarLink link={"/signIn"} name="Sign In" />
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
