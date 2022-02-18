import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import style from "./GameBoard.module.css";
import Cards from "../../Components/Cards/Cards";

const GameBoardUI = ({ setPoint, timer, points, par }) => {
  return (
    <section className="pb-200px">
      <Container>
        <main className={style.main}>
          <div className={style.Score}>
            <div className={style.Info}>
              <p className="text-primary">Score: {points}</p>
              <p className="text-danger">Timer: {timer.formatingTimer}</p>
            </div>
            <div className={style.prog}>
              <ProgressBar
                animated={true}
                striped
                variant="danger"
                now={(100 * timer.initTimer) / 100}
              />
            </div>
          </div>
          <Cards par={par} timer={timer.initTimer} setPoint={setPoint} />
        </main>
      </Container>
    </section>
  );
};

export default GameBoardUI;
