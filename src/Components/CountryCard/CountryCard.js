import React from "react";

const CountryCard = ({ data }) => {
  function shorCutPoint(num) {
    // sign num  * abs num / Range + key[K, M, B]
    const getNum = (range, key) =>
      Math.sign(num) * (Math.abs(num) / range).toFixed(1) + key;

    // Check Numbers Range [true || false]
    const checkRange = (min) =>
      Math.abs(num) > min && Math.abs(num) < +`${min}999`;

    // Return Value
    return checkRange(999)
      ? getNum(1000, "k")
      : checkRange(999999)
      ? getNum(1000000, "M")
      : checkRange(999999999)
      ? getNum(1000000000, "B")
      : Math.sign(num) * Math.abs(num);
  }

  return data.map(({ flag, name, points }, i) => (
    <tr key={i}>
      <td data-label="#">{i + 1}</td>
      <td data-label="Country">
        <img
          className="sm-Img"
          width="40px"
          height="100%"
          src={flag}
          alt="Err In Server"
        />
        <p>{name}</p>
      </td>
      <td data-label="points">{shorCutPoint(points)}</td>
    </tr>
  ));
};

export default CountryCard;
