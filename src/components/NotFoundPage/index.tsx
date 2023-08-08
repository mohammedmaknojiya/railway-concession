import React from "react";

const NotFoundPage: React.FC<NotFoundPageProps> = ({ message }) => {
  return (
    <div className="m-4 border light-shadow p-3 rounded">
      <div className="h5">{message}</div>
    </div>
  );
};

export default NotFoundPage;
