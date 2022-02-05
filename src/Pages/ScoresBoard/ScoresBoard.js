import React, { useState, useEffect } from "react";
import style from "./ScoresBoard.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserCard from "../../Components/UserCard/UserCard";
import CountryCard from "../../Components/CountryCard/CountryCard";

function ScoresBoard() {
  // Top Scores
  const [data, setData] = useState();

  // For Redirect
  const navigate = useNavigate();

  // User Info
  const {
    points,
    country: { name, flag },
  } = useSelector((state) => state.info);

  // Get Data
  useEffect(() => {
    axios("https://testsss53d4sa54.000webhostapp.com/getCountrys.php").then(
      ({ data }) => {
        // Sort With Point
        data = data.sort((a, b) => b.points - a.points);

        // Get Firs Top 10
        data = data.slice(0, 10);

        // Set Scores
        setData(data);
      }
    );
  }, []);

  return (
    <section className={style.scoreBoard}>
      <Container>
        <h2 className="mt-5">Scores Board</h2>
        <UserCard flag={flag} name={name} points={points} />
        <table className={style.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Country</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              <CountryCard data={data} />
            ) : (
              <tr>
                <td colSpan="3" className={style.load + " text-center"}>
                  Loding...
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Button
          className="d-block m-auto"
          onClick={() => navigate("/game")}
          variant="primary"
        >
          Solve Quiz
        </Button>
      </Container>
    </section>
  );
}

export default ScoresBoard;
