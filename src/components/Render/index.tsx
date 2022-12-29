import React from "react";

type RenderProps = {
  when: boolean;
  children: React.ReactNode;
};

const Render: React.FC<RenderProps> = ({ when, children }) => {
  if (when) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default Render;
