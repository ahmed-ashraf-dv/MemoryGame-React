import React from "react";
import { useSelector } from "react-redux";
import { Table, Card } from "react-bootstrap";

const UserCard = ({ flag, name, points, title }) => {
  // Get Loading
  const isLoading = useSelector((state) => state.info.country.isLoading);

  // Format Nums
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

  return (
    <Card className="m-2 bg-primary border-0 d-block">
      <Table className="text-white text-center" striped bordered hover>
        <thead>
          <tr style={{ height: "35px" }}>
            <th>{title}</th>
            {isLoading ? (
              <>
                <th>
                  <img
                    className="sm-Img"
                    width="40px"
                    height="100%"
                    src={flag}
                    alt="Err In Server"
                  />
                  <span>{name}</span>
                </th>
                <th>{shorCutPoint(points)}</th>
              </>
            ) : (
              <th>Loading...</th>
            )}
          </tr>
        </thead>
      </Table>
    </Card>
  );
};

export default UserCard;
