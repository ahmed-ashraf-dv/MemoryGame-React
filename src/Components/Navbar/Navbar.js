import React from "react";
import Swal from "sweetalert2";
import MindIcon from "../../Static/svg/MindIcon";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ isBlock }) {
  // For Redirect
  const navigate = useNavigate();

  // pathname
  const { pathname } = useLocation();

  // To Home
  const toHomeHandelar = () => {
    // Stop If In Home Alredy
    if (pathname === "/" || isBlock) return;

    // Are You Sure
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to leave this page?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Leave",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <nav className={`bg-${isBlock ? "danger" : "primary"}`}>
      <Container fluid>
        <div
          role="button"
          className="w-fit-content logo d-flex align-items-center"
          onClick={toHomeHandelar}
        >
          <MindIcon />
          <p className="text-white text-start p-3 fs-4">Memory Game</p>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
