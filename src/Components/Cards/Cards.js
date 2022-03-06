import React, { useEffect, useCallback } from "react";
import style from "../../Pages/GameBoard/GameBoard.module.css";
import Card from "../Card/Card";

const ALL_Cards = [
  { name: "eg" },
  { name: "tz" },
  { name: "ad" },
  { name: "sa" },
  { name: "ec" },
  { name: "PS" },
  { name: "eg" },
  { name: "tz" },
  { name: "ad" },
  { name: "sa" },
  { name: "ec" },
  { name: "PS" },
];

function Cards({ timer, setPoint, par }) {
  // Create A Random Order
  const randOrder = useCallback(() => {
    ALL_Cards.forEach((card) => {
      // Get Random Num
      const rand = Math.floor(Math.random() * (ALL_Cards.length * 2));
      card.order = rand;
    });
  }, []);

  // Show And Hide Card
  const showMeCards = useCallback(() => {
    // Get All Cards
    const Cards = par.current.childNodes;

    // Add Fliping Effect Effect
    setTimeout(() => {
      Cards.forEach((card) => {
        !card.classList.contains(style.display) &&
          card.classList.add(style.disable);
        card.classList.add(style.Acctive);
      });
    }, 2000);

    // Contnue
    setTimeout(() => {
      Cards.forEach((card) => {
        card.classList.remove(style.Acctive);

        // Add Dispale Class After Rotate Cards
        setTimeout(() => {
          card.classList.remove(style.disable);
        }, 600);
      });
    }, 3000);
  }, [par]);

  // Randomize Cards
  useEffect(() => {
    // Create A Random Order
    randOrder();

    // Show Me Th Cards
    showMeCards();
  }, [showMeCards, randOrder]);

  return (
    <article ref={par} className={style.game}>
      {ALL_Cards.map(({ name, order }, i) => (
        <Card
          key={i}
          timer={timer}
          setPoint={setPoint}
          par={par}
          card={name}
          order={order}
          showMeCards={showMeCards}
          randOrder={randOrder}
        />
      ))}
    </article>
  );
}

export default Cards;
