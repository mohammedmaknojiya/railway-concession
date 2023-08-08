import { Formik } from "formik";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ConcessionForm from "./ConcessionForm";
import { branchOptions, destinationStation } from "./utils";
import { addUserDetails } from "api/users";
import { getUserDetailsSchema } from "./userDetailsSchema";

const ConcessionFormWrapper = () => {
  const initialValues: CFormInitialValues = {
    fullName: "",
    gender: "Male",
    rollNumber: "",
    emailID: "",
    contact: "",
    dob: new Date(),
    address: "",
    pinCode: "",
    sourceStation: "",
    destinationStation: destinationStation[0].value,
    prevPassNumber: "",
    reEnterPrevPassNumber: "",
    oldVoucherNumber: "",
    oldPassExpiryDate: new Date(),
    branch: branchOptions[0].value,
    academicYear: "1",
    semester: "1",
    passDuration: "Monthly",
    travelClass: "First Class",
  };

  const navigate = useNavigate();

  const onSubmit = async (values: CFormInitialValues) => {
    try {
      const response = await addUserDetails(values);
      if (response.status === 201) {
        navigate("/success", {
          state: {
            enrollmentNumber: response?.data?.result.enrollmentNumber,
          },
        });
        toast.success("Form submitted successfully");
      } else {
        toast.error("Error submitting form");
      }
    } catch (err) {
      toast.error("Error submitting form");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getUserDetailsSchema()}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form onSubmit={formik.handleSubmit} className="overflow-auto">
            <ConcessionForm {...formik} />
            <div className="d-flex justify-content-center mb-5">
              <Button
                variant="primary"
                type="submit"
                disabled={formik.isSubmitting}
                onSubmit={() => formik.handleSubmit()}
              >
                {formik.isSubmitting && (
                  <Spinner as="span" size="sm" className="me-2" />
                )}
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ConcessionFormWrapper;
