import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import style from "./ScoresBoard.module.css";
import axios from "axios";
import UserCard from "../../Components/UserCard/UserCard";
import CountiesTable from "../../Components/CountiesTable/CountiesTable";

function ScoresBoard() {
  // Scores
  const [data, setData] = useState();

  // User Info
  const {
    points,
    isBlock,
    country: { name, flag },
  } = useSelector((state) => state.info);

  // His Country
  const myCountry = data
    ?.map(
      (country, idx) =>
        country.name === name && { points: country.points, order: idx + 1 }
    )
    .filter((valid) => valid)[0];

  // Get Data
  useEffect(() => {
    // Stop Request If isBlock
    if (isBlock === null || isBlock.isBlacklist) return;

    const domin = "http://localhost/Server/public/server";

    axios(`${domin}/getCountrys.php`).then(({ data }) => {
      // If Hack Stoped App
      if (typeof data === "string") {
        return;
      }
      // Sort With Point
      data = data.sort((a, b) => b.points - a.points);

      // Set Scores
      setData(data);
    });
  }, [isBlock]);

  return (
    <section className={style.scoreBoard}>
      <Container>
        <h2 className="mt-5 fs-4">Top Scores</h2>
        <UserCard title="You" flag={flag} name={name} points={points} />
        <CountiesTable topOnly={true} data={data} />
        <Link to="/game" className="d-block m-auto mt-4 px-3 btn btn-primary">
          Solve Quiz
        </Link>
        <h2 className="mt-5 fs-4">All Scores</h2>
        <UserCard
          title={`#${myCountry?.order || "Out the list"}`}
          flag={flag}
          name={name}
          points={myCountry?.points || 0}
        />
        <div className={style.scrollingBox}>
          <CountiesTable data={data} />
        </div>
      </Container>
    </section>
  );
}

export default ScoresBoard;
