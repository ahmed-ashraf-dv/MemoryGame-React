import React, { useCallback } from "react";
import style from "../../Pages/GameBoard/GameBoard.module.css";

function Card({ timer, setPoint, par, card, order, showMeCards, randOrder }) {
  // For Get data-id
  const getAttr = (e) => e.getAttribute("data-id");

  // Validtion Clicked Card
  const validCheck = useCallback((a, b) => getAttr(a) === getAttr(b), []);

  // Get Card On Click Not Image
  const getCard = useCallback(
    (e) => (getAttr(e) ? e : e.parentElement.parentElement),
    []
  );

  // Check New Game
  const checkGame = useCallback(
    (sucssCards) => {
      // Stop Function If empty Time
      if (!timer || sucssCards.length < 12) return;

      // Get New Game After 1 Secound
      setTimeout(() => {
        // Hide All
        sucssCards.forEach((card) => {
          card.classList.add(style.disable);
          card.classList.remove(style.success);
        });

        // Randoize All
        randOrder();

        // Show Agin
        showMeCards();
      }, 800);
    },
    [timer, randOrder, showMeCards]
  );

  // Click On Card
  const filpCards = useCallback(
    (e) => {
      // Get Card From Click
      const targetCard = getCard(e.target);

      // Add Acctive, flip Classes
      targetCard.classList.add(style.Acctive, style.flip);

      // Acctive Class
      const ActvCards = Array.from(par.current.childNodes).filter((card) =>
        card.classList.contains(style.Acctive)
      );

      // Some Validtion
      if (ActvCards.length >= 2 && validCheck(ActvCards[0], ActvCards[1])) {
        // Add Active Class
        ActvCards.forEach((card) => {
          card.classList.remove(style.Acctive, style.flip);
          card.classList.add(style.success);
        });

        // Add Point
        setPoint((prev) => prev + 1);
      } // Error Active
      else if (
        ActvCards.length >= 2 &&
        !validCheck(ActvCards[0], ActvCards[1])
      ) {
        // Remove Acctive Class
        ActvCards.forEach((card) => card.classList.remove(style.Acctive));

        // Remove flip Class
        setTimeout(() => {
          ActvCards.forEach((card) => card.classList.remove(style.flip));
        }, 1000);
      }

      // Success Class
      const sucssCards = Array.from(par.current.childNodes).filter((card) =>
        card.classList.contains(style.success)
      );

      // Check New Game Or GameOver
      checkGame(sucssCards);
    },
    [getCard, par, validCheck, checkGame, setPoint]
  );

  return (
    <div
      style={{ order: order }}
      data-id={card}
      onClick={filpCards}
      className={`${style.Card} ${style.disable}`}
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
