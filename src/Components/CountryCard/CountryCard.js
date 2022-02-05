import React from "react";

const CountryCard = ({ data }) => {
  const shorCutPoint = (points) => {
	  return Math.abs(Number(points)) >= 1.0e+9 
	  		? Math.abs(Number(points)) / 1.0e+9 + "B" 
	  		
	  		 // six Zeroes for Millions
	  		: Math.abs(Number(points)) >= 1.0e+6 
	  		? Math.abs(Number(points)) / 1.0e+6 + "M"

	  		 // four Zeroes for Billions
	       	: Math.abs(Number(points)) >= 1.0e+4
	       	? Math.abs(Number(points)) / 1.0e+3 + "K"

	       	// No Zero
	       	: Math.abs(Number(points));
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
        <p style={{ paddingTop: "10px!important" }}>{name}</p>
      </td>
      <td data-label="points">{shorCutPoint(points)}</td>
    </tr>
  ));
};

export default CountryCard;
