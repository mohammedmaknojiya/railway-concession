import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import FormGroupWrapper from "components/FormGroupWrapper";
import { AppViewContext } from "context/AppView";
import { Button } from "react-bootstrap";

const CheckStatus = () => {
  const [emailID, setEmailID] = useState("");
  const { isPhoneView } = useContext(AppViewContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(emailID);
    setEmailID("");
    navigate("/status");
  };

  return (
    <div className={`container my-4 ${isPhoneView ? "" : "w-40"}`}>
      <FormGroupWrapper
        label="Email address"
        type="email"
        controllerProps={{
          placeholder: "Enter email",
          autoComplete: "off",
          value: emailID,
          onChange: (e: React.ChangeEvent<{ value: string }>) =>
            setEmailID(e.target.value),
        }}
      />
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="primary"
          type="submit"
          disabled={false}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CheckStatus;
