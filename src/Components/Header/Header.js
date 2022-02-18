import React from "react";

function Header({ isBlock }) {
  return (
    <header className="bg-dark">
      <p className="text-white text-center p-3 fs-5">
        Hello {isBlock ? <span className="text-danger">Hacker</span> : "User"}
      </p>
    </header>
  );
}

export default Header;
