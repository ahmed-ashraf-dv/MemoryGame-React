import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import style from "../../Pages/ScoresBoard/ScoresBoard.module.css";

const CountiesTable = ({ data, topOnly = false }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {data?.length === 0 ? (
          <tr>
            <td colSpan="3" className={style.load + " text-center"}>
              Empty Table Here {":)"}
            </td>
          </tr>
        ) : data ? (
          <CountryCard data={topOnly ? data.slice(0, 10) : data} />
        ) : (
          <tr>
            <td colSpan="3" className={style.load + " text-center"}>
              Loding...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CountiesTable;
