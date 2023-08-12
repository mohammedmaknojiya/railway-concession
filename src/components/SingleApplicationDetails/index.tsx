import { Button, Modal } from "react-bootstrap";

import SingleField from "components/ApplicationStatus/SingleField";

const SingleApplicationDetails: React.FC<SingleApplicationDetailsProps> = ({
  userDetails,
  showUserDetails,
  handleCloseUserDetailsModal,
}) => {
  const getUserDetailsValue = (key: keyof UserDetailsAPIResp) => {
    return userDetails?.[key] ? `${userDetails[key]}` : "-";
  };

  return (
    <Modal show={showUserDetails} onHide={handleCloseUserDetailsModal}>
      <Modal.Header closeButton>
        <Modal.Title>Review Application</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SingleField label="Name" value={getUserDetailsValue("fullName")} />
        <SingleField
          label="Enrollment Number"
          value={getUserDetailsValue("enrollmentNumber")}
        />
        <SingleField label="ID" value={getUserDetailsValue("rollNumber")} />
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
          label="Applied Date"
          value={getUserDetailsValue("appliedDate")}
        />
        <SingleField label="Status" value={getUserDetailsValue("status")} />
        <SingleField label="ID Card" value="Render Image here" />
        <SingleField label="Gender" value={getUserDetailsValue("gender")} />
        <SingleField label="Email ID" value={getUserDetailsValue("emailID")} />
        <SingleField label="Contact" value={getUserDetailsValue("contact")} />
        <SingleField label="DOB" value={getUserDetailsValue("dob")} />
        <SingleField label="Address" value={getUserDetailsValue("address")} />
        <SingleField label="Pin Code" value={getUserDetailsValue("pinCode")} />
        <SingleField
          label="Previous Pass/Season Number"
          value={getUserDetailsValue("prevPassNumber")}
        />
        <SingleField
          label="Old Voucher Number"
          value={getUserDetailsValue("oldVoucherNumber")}
        />
        <SingleField
          label="Old Pass Expiry"
          value={getUserDetailsValue("oldPassExpiryDate")}
        />
        <SingleField
          label="Branch of Academics"
          value={getUserDetailsValue("branch")}
        />
        <SingleField
          label="Academics Year"
          value={getUserDetailsValue("academicYear")}
        />
        <SingleField label="Semester" value={getUserDetailsValue("semester")} />
        <SingleField
          label="Pass Duration"
          value={getUserDetailsValue("passDuration")}
        />
        <SingleField
          label="Remarks"
          value={getUserDetailsValue("remarks")}
          borderBottom={false}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseUserDetailsModal}>
          Close
        </Button>
        <Button variant="success" onClick={handleCloseUserDetailsModal}>
          Approve
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SingleApplicationDetails;
