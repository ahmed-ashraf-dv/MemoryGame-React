import React, { useMemo } from "react";
import Hack01 from "../../Static/jpg/Hack01.jpg";
import Hack02 from "../../Static/jpg/Hack02.jpg";
import Hack03 from "../../Static/jpg/Hack03.jpg";
import Hack04 from "../../Static/jpg/Hack04.jpg";

const RandImg = () => {
  const randomImg = useMemo(() => {
    const imgs = [Hack01, Hack02, Hack03, Hack04];

    const randomNum = Math.floor(Math.random() * imgs.length);

    return imgs[randomNum];
  }, []);
  return (
    <div className="banImg m-auto bg-dark">
      <img className="w-100 h-100" src={randomImg} alt="Erro In Server" />
    </div>
  );
};

export default RandImg;
