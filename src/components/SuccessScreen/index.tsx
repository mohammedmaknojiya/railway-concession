import { PersonFilled } from "@fluentui/react-icons";
import { ClockRegular } from "@fluentui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

import { AppViewContext } from "context/AppView";

const SuccessScreen = () => {
  const { isPhoneView } = useContext(AppViewContext);
  const location = useLocation();

  return (
    <div className="container my-4 overflow-auto">
      <div className="border p-4 rounded-8 light-shadow">
        <div
          className={`d-flex ${
            isPhoneView ? "flex-column" : "align-items-center"
          }`}
        >
          <PersonFilled fontSize={48} className="me-3 text-primary" />
          <div className="font-size-36 me-3 text-muted">Enrollment Number</div>
          <div className="font-size-36 fw-bold">
            #{location?.state?.enrollmentNumber || "000000"}
          </div>
        </div>
        <div className="my-4">
          <div className="font-size-30 fw-bold">
            Please Note Down this Enrollment Number
          </div>
          <div className="font-size-16 text-muted">
            You need to show this number in the office to get you concession
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <ClockRegular
            fontSize={22}
            className={`me-2 text-muted ${isPhoneView ? "w-20" : ""}`}
          />
          <div className="text-muted font-size-16">
            Office closed from 1:00 PM to 2:00 PM
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-8 light-shadow my-4">
        <div className="font-size-30 fw-bold">
          Check status of your form at{" "}
          <Link
            to="/check-status"
            className="text-primary text-decoration-none"
          >
            Form Status
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <ClockRegular
            fontSize={22}
            className={`me-2 text-muted ${isPhoneView ? "w-20" : ""}`}
          />
          <div className="text-muted font-size-16">
            Keep checking Remark on{" "}
            <Link
              to="/check-status"
              className="text-primary text-decoration-none"
            >
              Form Status
            </Link>{" "}
            in case there are any issues
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
