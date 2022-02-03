import React from "react";
import { useDispatch } from "react-redux";
import { setInfo, getCountery } from "./store/infoSlice";
import Layout from "./Components/Layout/Layout";
import GameBoard from "./Pages/GameBoard/GameBoard";
import ScoresBoard from "./Pages/ScoresBoard/ScoresBoard";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  // Put To Redux
  const Dispatch = useDispatch();

  // Default User Info
  const point = 0;

  // Get Main LS
  !localStorage.getItem("point") && localStorage.setItem("point", point);

  // Put In Varible
  const info = +localStorage.getItem("point");

  // Dispatch Info
  Dispatch(setInfo(info));

  // Get Countery
  Dispatch(getCountery());

  return (
    <div style={{ backgroundColor: "var(--bs-gray-300)" }}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<ScoresBoard />} />
          <Route path="game" element={<GameBoard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
