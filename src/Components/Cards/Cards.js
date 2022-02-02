import React, { Fragment, useEffect } from "react";
import Card from "../Card/Card";

function Cards({ cards, setCard, getAttr, par, ALLCards, randOrder, shwCrd }) {
  // Randomize Cards
  useEffect(() => {
    // Create A Random Order
    randOrder();

    // Show Me Th Cards
    shwCrd();
  }, [shwCrd, randOrder]);

  // Get Card On Click Not Image
  const getCard = (e) => (getAttr(e) ? e : e.parentElement.parentElement);

  return ALLCards.map(({ name, order }, i) => (
    <Fragment key={i}>
      <Card
        order={order}
        par={par}
        card={name}
        cards={cards}
        setCard={setCard}
        getCard={getCard}
      />
    </Fragment>
  ));
}

export default Cards;
