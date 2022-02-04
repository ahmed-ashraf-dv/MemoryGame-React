import React from "react";

const CountryCard = ({ data }) => {
  let points = 11400;
  return data.map(({ flag, name }, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>
        <img
          style={{ marginInline: "10px", width: "40px", height: "25px" }}
          width="40px"
          height="100%"
          src={flag}
          alt="Err In Server"
        />
        {name}
      </td>
      <td>
        {points >= 10000
          ? `${points.toString().slice(0, 2)},${points.toString().slice(2, 3)}K`
          : points}
      </td>
    </tr>
  ));
};

export default CountryCard;
