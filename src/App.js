import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo, getCountery, isBlock } from "./store/infoSlice";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import ScoresBoard from "./Pages/ScoresBoard/ScoresBoard";
import GameBoard from "./Pages/GameBoard/GameBoard";
import Ban from "./Pages/Band/Band";
import Layout from "./Components/Layout/Layout";
import Loding from "./Components/Loding/Loding";

function App() {
  // For Redirect
  const Navigate = useNavigate();

  // Loding State
  const [isRedirect, setDirect] = useState(false);

  // pathname
  const { pathname } = useLocation();

  // Put To Redux
  const Dispatch = useDispatch();

  // Get Blocked State
  const { isBlock: Blocked } = useSelector((state) => state.info);

  // Set Default Values
  useEffect(() => {
    // Default User Info
    const point = 0;

    // Get Main LS
    !localStorage.getItem("point") && localStorage.setItem("point", point);

    // Put In Varible
    const info = +localStorage.getItem("point");

    // Get Countery
    Dispatch(getCountery());

    // Dispatch Info
    Dispatch(setInfo(info));
  }, [Dispatch]);

  // Check Is Block
  useEffect(() => {
    // Get Response
    if (Blocked === null) return Dispatch(isBlock());

    // Redirect To Ban Page If his Band
    if (Blocked.isBlacklist) {
      // Add Ban Class
      document.body.classList.add("hack");

      // Redirect To Ban Page
      Navigate("/ban");
    }
    // If Not Banned And View Ban Page
    else if (Blocked.isBlacklist === false && pathname === "/ban")
      Navigate("/");

    // Loding !!
    setDirect(true);
  }, [Blocked, Dispatch, Navigate, pathname]);

  return (
    <div className="App">
      {!isRedirect ? (
        <Loding />
      ) : (
        <Layout>
          <Routes>
            <Route exact path="/" element={<ScoresBoard />} />
            <Route path="game" element={<GameBoard />} />
            <Route path="ban" element={<Ban />} />
            <Route path="*" element={<ScoresBoard />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
