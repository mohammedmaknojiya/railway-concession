import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { RenderController } from "components/FormGroupWrapper";

const AddRemark: React.FC<AddRemarkProps> = ({
  isEditClick,
  userDetails,
  handleCloseEdit,
}) => {
  const [remarks, setRemarks] = useState("");

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setRemarks(e.target.value);
  };

  useEffect(() => {
    setRemarks(userDetails?.remarks);
  }, [userDetails]);

  return (
    <Modal show={isEditClick} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Add Remarks</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RenderController
          type="textarea"
          controllerProps={{
            placeholder: "Add remarks",
            autoComplete: "off",
            name: "remarks",
            value: remarks,
            onChange: handleChange,
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEdit}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseEdit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRemark;
