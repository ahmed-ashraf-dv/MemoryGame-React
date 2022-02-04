import React from "react";

const CountryCard = ({ data }) => {
  return data.map(({ flag, name, points }, i) => (
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
      <td>{points}</td>
    </tr>
  ));
};

export default CountryCard;
