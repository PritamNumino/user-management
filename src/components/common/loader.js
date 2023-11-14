import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner animation="border" className="spinner" variant="secondary" />
    </>
  );
};

export default Loader;
