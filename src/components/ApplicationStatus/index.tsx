import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getUserDetails } from "api/users";
import SingleField from "./SingleField";
import { toast } from "react-toastify";
import Loader from "components/Loader";
import NotFoundPage from "components/NotFoundPage";
import { getFormattedDisplayDate } from "./../../utils/utils";

const ApplicationStatus = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetailsAPIResp | null>(
    null
  );
  const { emailID = "" } = useParams();

  const getUserDetailsValue = (key: keyof UserDetailsAPIResp) => {
    return userDetails?.[key] ? `${userDetails[key]}` : "-";
  };

  const getUserApplicationStatus = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await getUserDetails(emailID);
      if (response.status === 201) {
        setUserDetails({ ...response?.data });
      } else {
        toast.error("Unable to find user details");
      }
    } catch (err) {
      toast.error("Unable to find user details");
    } finally {
      setIsFetching(false);
    }
  }, [emailID]);

  useEffect(() => {
    getUserApplicationStatus();
  }, [getUserApplicationStatus]);

  if (!userDetails) {
    return (
      <NotFoundPage message={`User request with ${emailID} is not present`} />
    );
  }

  return (
    <div className="container my-4 overflow-auto">
      <div className="text-center font-size-26 fw-bold mb-3">
        Application Status
      </div>
      <Loader isLoading={isFetching}>
        <div className="border rounded-8 p-3 light-shadow">
          <SingleField label="ID" value={getUserDetailsValue("rollNumber")} />
          <SingleField
            label="Enrollment Number"
            value={getUserDetailsValue("enrollmentNumber")}
          />
          <SingleField label="Name" value={getUserDetailsValue("fullName")} />
          <SingleField
            label="Source Station"
            value={getUserDetailsValue("sourceStation")}
          />
          <SingleField
            label="Destination Station"
            value={getUserDetailsValue("destinationStation")}
          />
          <SingleField
            label="Travel Class"
            value={getUserDetailsValue("travelClass")}
          />
          <SingleField
            label="Duration"
            value={getUserDetailsValue("passDuration")}
          />
          <SingleField
            label="Applied Date"
            value={getFormattedDisplayDate(getUserDetailsValue("appliedDate"))}
          />
          <SingleField label="Status" value={getUserDetailsValue("status")} />
          <SingleField label="ID Card" value="Render Image here" />
          <SingleField
            label="Remarks"
            value={getUserDetailsValue("remarks")}
            borderBottom={false}
          />
        </div>
      </Loader>
    </div>
  );
};
export default ApplicationStatus;
