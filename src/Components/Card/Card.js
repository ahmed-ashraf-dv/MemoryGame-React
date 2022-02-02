import React from "react";
import style from "../../Pages/GameBoard/GameBoard.module.css";

function Card({ card, cards, setCard, getCard, order }) {
  // Click On Card
  const flipCardHandelar = (e) => {
    // Get Card From Click
    const card = getCard(e.target);

    // Check If Correct dont equal clicked
    if (cards.length < 2 && card !== cards[0]) {
      // Fliping Card
      card.classList.add(style.Acctive);

      // Set Card To Checking State
      setCard((prev) => [...prev, card]);
    }
  };

  return (
    <div
      style={{ order: order }}
      data-id={card}
      onClick={flipCardHandelar}
      className={style.Card}
    >
      <div className={style.BackFace}>
        <img
          height="100%"
          width="100%"
          src={`https://countryflagsapi.com/png/${card}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
