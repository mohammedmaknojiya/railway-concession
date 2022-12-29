import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { object } from "yup";

import ConcessionForm from "./ConcessionForm";
import { branchOptions, destinationStation } from "./utils";

const schema = object({});

const ConcessionFormWrapper = () => {
  const initialValues: CFormInitialValues = {
    fullName: "",
    gender: "Male",
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

  const onSubmit = async (values: CFormInitialValues) => {
    console.log("submit", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
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
