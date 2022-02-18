import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loding = () => {
  return (
    <div className="bg-primary w-100 vh-100 position-fixed d-flex justify-content-center align-items-center top-0 start-0">
      <PropagateLoader color="#fff" />
    </div>
  );
};

export default Loding;
