import { useContext } from "react";

import { AppViewContext } from "context/AppView";

type SingleFieldProps = {
  label: string;
  value: string;
  borderBottom?: boolean;
};

const SingleField: React.FC<SingleFieldProps> = ({
  label,
  value,
  borderBottom = true,
}) => {
  const { isPhoneView } = useContext(AppViewContext);

  return (
    <div
      className={`d-flex ${
        isPhoneView ? "flex-column" : "align-items-center"
      } ${borderBottom ? "border-bottom" : ""} p-3 c-pointer hover-light-gray`}
    >
      <div
        className={`font-size-16 ${
          isPhoneView ? "w-100 mb-1" : "w-30 me-3"
        } fw-bold`}
      >
        {label}
      </div>
      <div className="font-size-16">{value}</div>
    </div>
  );
};

export default SingleField;
