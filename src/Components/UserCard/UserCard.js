import React from "react";
import { useSelector } from "react-redux";
import { Table, Card } from "react-bootstrap";

const UserCard = ({ flag, name, points }) => {
  // Get Loading
  const isLoading = useSelector((state) => state.info.country.isLoading);

  return (
    <Card className="m-2 bg-primary border-0 d-block">
      <Table className="text-white text-center" striped bordered hover>
        <thead>
          <tr style={{ height: "35px" }}>
            <th>User</th>
            <th>
              {isLoading ? (
                <>
                  <img
                    style={{ marginInline: "10px", width: "40px", height: "25px" }}
                    width="40px"
                    height="100%"
                    src={flag}
                    alt="Err In Server"
                  />
                  <span>{name}</span>
                </>
              ) : (
                "Loading..."
              )}
            </th>
            <th>{points}</th>
          </tr>
        </thead>
      </Table>
    </Card>
  );
};

export default UserCard;
