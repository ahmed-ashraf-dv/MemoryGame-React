/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPoint } from "../../store/infoSlice";
import useTimer from "../../CustomHooks/useTimer/useTimer";
import Swal from "sweetalert2";
import GameBoardUI from "./GameBoardUI";
import style from "./GameBoard.module.css";

function GameBoard() {
  // For Redirect
  const navigate = useNavigate();

  // For Actions
  const dispatch = useDispatch();

  // Parent For Cards
  const cardsParent = useRef(null);

  // Points
  const [points, setPoint] = useState(0);

  // Timer Call Back Function
  const addPointsHandelar = useCallback(() => {
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

      // Show Card
      cardsParent.current.childNodes.forEach((card) => {
        card.classList.add(style.Acctive);
      });

      // Get Banner
      Toast.fire({ icon: "success", title: `GameOver` });

      // Redirect
      setTimeout(() => navigate("/"), 3000);

      // Handel Points
      setPoint((points) => {
        // Set Info To LS
        let myPoints = +localStorage.getItem("point");

        // Set Point To LS
        localStorage.setItem("point", (myPoints += points));

        // Add Point
        dispatch(addPoint(points));

        // Return Same Value
        return points;
      });
    }, 500);
  }, []);

  // Start Timer
  const { formatingTimer, initTimer } = useTimer({
    initTime: { start: 100, end: 0 },
    type: "decrease",
    format: true,
    callBack: addPointsHandelar,
  });

  // Get Data To UI
  const data = {
    points,
    timer: { formatingTimer, initTimer },
    par: cardsParent,
    setPoint,
  };

  return <GameBoardUI {...data} />;
}

export default GameBoard;
