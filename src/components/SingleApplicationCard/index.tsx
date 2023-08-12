import { Col } from "react-bootstrap";
import { EditFilled, EyeFilled } from "@fluentui/react-icons";
import { getFormattedDisplayDate } from "utils/utils";

const SingleCardField: React.FC<SingleCardField> = ({ label, value }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="me-2">{label}</div>
      <div className="text-secondary">{value}</div>
    </div>
  );
};

const SingleApplicationCard: React.FC<SingleApplicationCardProps> = ({
  handleIsPreviewClick,
  applicationDetails,
  handleIsEditClick,
}) => {
  const getUserDetailsValue = (key: keyof UserDetailsAPIResp) => {
    return applicationDetails?.[key] ? `${applicationDetails[key]}` : "-";
  };

  const handlePreviewClick = () => {
    handleIsPreviewClick(applicationDetails);
  };

  const handleEditClick = () => {
    handleIsEditClick(applicationDetails);
  };

  return (
    <Col sm={12} md={6} lg={4} className="p-0">
      <div className="p-3 border rounded light-shadow m-3">
        <div className="d-flex align-items-center border-bottom pb-3">
          <div className="fw-bold font-size-20 flex-grow-1">
            {getUserDetailsValue("fullName")}
          </div>
          <div>
            <EditFilled
              fontSize={22}
              className="c-pointer me-2"
              onClick={handleEditClick}
            />
            <EyeFilled
              fontSize={22}
              className="c-pointer"
              onClick={handlePreviewClick}
            />
          </div>
        </div>

        <div className="mt-3">
          <SingleCardField
            label="ID:"
            value={getUserDetailsValue("rollNumber")}
          />
          <SingleCardField
            label="Enrollment Number:"
            value={getUserDetailsValue("enrollmentNumber")}
          />
          <SingleCardField
            label="Status:"
            value={getUserDetailsValue("status")}
          />
          <SingleCardField
            label="Applied Date:"
            value={getFormattedDisplayDate(getUserDetailsValue("appliedDate"))}
          />
        </div>
      </div>
    </Col>
  );
};

export default SingleApplicationCard;
