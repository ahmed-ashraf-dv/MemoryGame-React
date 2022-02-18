import React, { useCallback } from "react";
import { isBlock } from "../../store/infoSlice";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import useTimer from "../../CustomHooks/useTimer/useTimer";
import RandImg from "../../Components/RandImg/RandImg";

const Band = () => {
  //
  const Dispatch = useDispatch();

  // Get Blocked State
  const { timer } = useSelector((state) => state.info.isBlock);

  // Remining Time To UnBlocked  Timer
  const { formatingTimer } = useTimer({
    initTime: { start: timer, end: 0 },
    type: "decrease",
    format: true,
    callBack: useCallback(() => {
      Dispatch(isBlock());
      document.body.classList.remove("hack");
    }, [Dispatch]),
  });

  return (
    <section className="pb-200px">
      <Container fluid>
        <h2 className="text-danger mt-5 mx-auto fs-4 w-fit-content">
          Baaaaan !!
        </h2>
        <p className="p-2 text-center bg-warning d-grid text-danger fw-600 br-8">
          The ban will be canceling after: <span>{formatingTimer}</span>
        </p>
        <RandImg />
      </Container>
    </section>
  );
};

export default Band;
