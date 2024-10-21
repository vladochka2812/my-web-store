import React, { useEffect, useState } from "react";
import { NavbarLink } from "./NavbarLink";
import {
  IoCartOutline,
  IoHeartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import Logo from "../../images/logo.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { handleDeleteAccessToken } from "../../functions/useAccessToken";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { items: cartList } = useSelector((state) => state.cart);
  const { items: wishList } = useSelector((state) => state.wishList);

  const [isAuth, setIsAuth] = useState(false);
  const [categories, setCategories] = useState();
  const [wishListLength, setWishListLength] = useState();
  const [cartListLength, setCartListLength] = useState();

  useEffect(() => {
    setCartListLength(cartList.length || 0);
  }, [cartList]);

  useEffect(() => {
    setWishListLength(wishList.length || 0);
  }, [wishList]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/categories`
      );
      if (!response.ok) {
        console.log("Response doesn't seem to be ok");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const logOut = async () => {
    await signOut(auth);
    handleDeleteAccessToken();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
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
              <IoLogOutOutline size={26} onClick={logOut} />
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
  );
};
