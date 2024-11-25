import React, { useRef } from "react";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";
import { NewCollection } from "../Components/NewCollection/NewCollection";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const Home = () => {
  const popularRef = useRef(null);
  const newRef = useRef(null);

  const scrollToPopular = () => {
    popularRef.current?.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
  };

  const scrollNew = () => {
    newRef.current?.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
  };

  return (
    <div>
      <Hero onscrollNew={scrollNew} />

      <div ref={popularRef}>
        <Popular />
      </div>

      <Offers onScrollToPopular={scrollToPopular} />

      <div ref={newRef}>
        <NewCollection />
      </div>
      
      <NewsLetter />
    </div>
  );
};
