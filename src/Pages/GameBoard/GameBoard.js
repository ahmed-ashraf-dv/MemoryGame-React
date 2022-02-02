import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPoint } from "../../store/infoSlice";
import { Container, ProgressBar } from "react-bootstrap";
import Swal from "sweetalert2";
import Cards from "../../Components/Cards/Cards";
import style from "./GameBoard.module.css";

function GameBoard() {
  const ALLCards = React.useMemo(
    () => [
      { name: "eg" },
      { name: "tz" },
      { name: "ad" },
      { name: "sa" },
      { name: "ec" },
      { name: "vn" },
      { name: "eg" },
      { name: "tz" },
      { name: "ad" },
      { name: "sa" },
      { name: "ec" },
      { name: "vn" },
    ],
    []
  );

  // For Redirect
  const navigate = useNavigate();

  // For Actions
  const Dispatch = useDispatch();

  // For Check
  const [cards, setCard] = useState([]);

  // Checked Card
  const [chckeds, setChcked] = useState([]);

  // Points
  const [points, setPoint] = useState(0);

  // Points
  const [timer, setTime] = useState(1);

  // Parent For Cards
  const cardsParent = React.useRef(null);

  // For Get data-id
  const getAttr = (e) => e.getAttribute("data-id");

  // To Get Date
  const GetDate = () => {
    // Get Length 2
    const getLnth = (n) => n.toString().padStart(2, "0");

    // Info
    const minute = Math.floor(timer / 60);
    const second = timer % 60;

    // Return Date
    return `${getLnth(minute)}:${getLnth(second)}`;
  };

  const showMeCards = useCallback(() => {
    // Get All Cards
    const Cards = cardsParent.current.childNodes;

    // Add Fliping Effect Effect
    setTimeout(() => {
      Cards.forEach((card) => card.classList.add(style.Acctive));
    }, 2000);

    // Contnue
    setTimeout(() => {
      Cards.forEach((card) => card.classList.remove(style.Acctive));
    }, 3000);
  }, []);

  // Validtion Clicked Card
  const validCheck = useCallback(
    (e) => {
      // Create Validtion Varible
      let valid = true;

      // Check If This Is Checked
      chckeds.forEach((chcked) => getAttr(e) === chcked && (valid = false));

      // Return Value
      return valid;
    },
    [chckeds]
  );

  // Check Correct Or Rong
  const CheckSolve = useCallback(
    (a, b) => {
      if (getAttr(a) === getAttr(b)) {
        // Add Point
        setPoint((prev) => prev + 1);

        // Set Card To Checked State
        setChcked((prev) => [...prev, getAttr(a)]);
      } //
      else {
        // Remove Acctive Class
        setTimeout(() => {
          cards.forEach((card) => card.classList.remove(style.Acctive));
        }, 1000);
      }
    },
    [cards]
  );

  // Create A Random Order
  const randOrder = useCallback(() => {
    ALLCards.forEach((card) => {
      card.order = Math.floor(Math.random() * (ALLCards.length * 2));
    });
  }, [ALLCards]);

  // Start Timer
  useEffect(() => {
    // Put The Default Value
    setTime(100);

    // Start DownTime
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
  }, []);

  // Check Correct Fliping
  useEffect(() => {
    // Get Solve Card
    const [firstCard, secoundCard] = cards;

    // Some Validtion
    if (cards.length >= 2 && validCheck(firstCard)) {
      // Check Solve
      CheckSolve(firstCard, secoundCard);

      // Empty Solving
      setCard([]);
    }
  }, [cards, validCheck, CheckSolve]);

  // Check New Game
  useEffect(() => {
    // Stop Function If empty Time
    if (!timer || chckeds.length < 6) return;
    // Get New Game After 1 Secound
    setTimeout(() => {
      // Get All Cards
      const Cards = cardsParent.current.childNodes;

      // Empty chckeds
      setChcked([]);

      // Hide All
      Cards.forEach((card) => card.classList.remove(style.Acctive));

      // Randoize All
      randOrder();

      // Show Agin
      showMeCards();
    }, 1000);
  }, [chckeds, timer, randOrder, showMeCards]);

  // Finshed Game
  useEffect(() => {
    // Stop Function If Still Time
    if (timer) return;

    // Get All Cards
    const Cards = cardsParent.current.childNodes;

    // For Clicked
    const Checked = [];

    // Disaple Clicked For All
    Cards.forEach((card) => Checked.push(getAttr(card)));

    // Disaple Click
    setChcked((prev) => [...prev, ...Checked]);

    // Show All Cards
    Cards.forEach((card) => card.classList.add(style.Acctive));

    // Show Msg
    setTimeout(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      // Add Point
      Dispatch(addPoint(points));

      // Set Info To LS
      let myPoints = +localStorage.getItem("point");

      // Set Point To LS
      localStorage.setItem("point", (myPoints += points));

      Toast.fire({
        icon: "success",
        title: `GameOver`,
      });
    }, 500);

    // Redirect
    setTimeout(() => navigate("/"), 3000);
  }, [navigate, points, Dispatch, timer]);

  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <article className={style.main}>
          <div className={style.Score}>
            <div className={style.Info}>
              <p className="text-primary">Score: {points}</p>
              <p className="text-danger">
                Timer: <GetDate />
              </p>
            </div>
            <div className={style.prog}>
              <ProgressBar
                animated={true}
                striped
                variant="danger"
                now={timer}
              />
            </div>
          </div>
          <div ref={cardsParent} className={style.game}>
            <Cards
              shwCrd={showMeCards}
              ALLCards={ALLCards}
              randOrder={randOrder}
              par={cardsParent}
              cards={cards}
              setCard={setCard}
              getAttr={getAttr}
            />
          </div>
        </article>
      </Container>
    </section>
  );
}

export default GameBoard;
