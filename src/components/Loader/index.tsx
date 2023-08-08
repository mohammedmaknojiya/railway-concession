import React from "react";
import { Spinner } from "react-bootstrap";

const Loader: React.FC<LoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center h-fit-content">
        <Spinner variant="secondary" />
      </div>
    );
  }
  return <>{children}</>;
};

export default Loader;
