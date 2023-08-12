import { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import { RenderController } from "components/FormGroupWrapper";
import { addRemarks } from "api/users";

const AddRemark: React.FC<AddRemarkProps> = ({
  isEditClick,
  userDetails,
  handleCloseEdit,
  getApplicationsList,
}) => {
  const [isUpdatingRemark, setIsUpdatingRemark] = useState(false);
  const [remarks, setRemarks] = useState("");

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setRemarks(e.target.value);
  };

  const handleSave = async () => {
    try {
      setIsUpdatingRemark(true);
      const response = await addRemarks(userDetails._id, remarks);
      if (response.status === 201) {
        toast.success("Successfully added remarks");
      } else {
        toast.error("Unable to add remark");
      }
    } catch (err) {
      toast.error("Unable to add remarks");
    } finally {
      setIsUpdatingRemark(false);
      handleCloseEdit();
      getApplicationsList();
    }
  };

  useEffect(() => {
    setRemarks(userDetails?.remarks);
  }, [userDetails]);

  return (
    <Modal show={isEditClick} onHide={handleCloseEdit} centered>
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
        <Button
          variant="secondary"
          onClick={handleCloseEdit}
          disabled={isUpdatingRemark}
        >
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {isUpdatingRemark && <Spinner as="span" size="sm" className="me-2" />}
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRemark;
