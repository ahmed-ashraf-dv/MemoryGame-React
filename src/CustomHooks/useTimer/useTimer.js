import { useState, useEffect, useMemo } from "react";

// Counetr Types
const INCREASE = "increase";
const DECREASE = "decrease";

const useTimer = ({
  initTime: { start = 0, end },
  type = INCREASE,
  amount = 1,
  callBack,
}) => {
  // Initial Time
  const [timer, setTimer] = useState(start);

  const stopTimer = useMemo(
    () => (interval, prev) => {
      clearInterval(interval);
      callBack();
      return prev;
    },
    [callBack]
  );

  useEffect(() => {
    const count = setInterval(() => {
      setTimer((prev) => {
        return type === INCREASE
          ? prev < end
            ? prev + amount
            : stopTimer(count, prev)
          : type === DECREASE
          ? prev > end
            ? prev - amount
            : stopTimer(count, prev)
          : prev;
      });
    }, 1000);
  }, [type, end, amount, stopTimer]);

  const formatDate = (time) => {
    // Get Length 2
    const getLength = (n) => n.toString().padStart(2, "0");

    // Get Parts
    const getFormat = (d) => (d ? `${getLength(d)}:` : "");

    // Info
    const Date = {
      days: Math.floor((time / 60 / 60 / 60) % 60),
      Houers: Math.floor((time / 60 / 60) % 60),
    };

    let formatingDate = "";

    for (let i in Date) {
      formatingDate += getFormat(Date[i]);
    }

    // Return Date
    return (
      formatingDate +
      getLength(Math.floor((time / 60) % 60)) +
      ":" +
      getLength(time % 60)
    );
  };

  return { initTimer: timer, formatingTimer: formatDate(timer) };
};

export default useTimer;
