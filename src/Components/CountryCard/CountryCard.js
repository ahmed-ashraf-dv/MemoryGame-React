import React from "react";

const CountryCard = ({ data }) => {
  const shorCutPoint = (points) => {
    return points;
  };

  return data.map(({ flag, name, points }, i) => (
    <tr key={i}>
      <td data-label="#">{i + 1}</td>
      <td data-label="Country">
        <img
          style={{ marginInline: "10px", width: "40px", height: "25px" }}
          width="40px"
          height="100%"
          src={flag}
          alt="Err In Server"
        />
        {name}
      </td>
      <td data-label="points">{shorCutPoint(points)}</td>
    </tr>
  ));
};

export default CountryCard;
