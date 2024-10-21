import React from "react";
import mainImage from "../images/main-photo.avif";
import { Button } from "../components/shared/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img src={mainImage} alt="Elevete" className="w-full" />
      <div className="fixed bottom-[45%] left-[45%]">
        <span className="text-[20px] font-semibold">
          Find your favorite items
        </span>
        <Button
          onClick={() => {
            navigate("/category/women's clothing");
          }}
        >
          Start shopping
        </Button>
      </div>
    </div>
  );
};

export default Home;
