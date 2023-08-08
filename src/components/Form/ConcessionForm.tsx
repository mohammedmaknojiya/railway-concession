import { FormikHandlers, FormikProps, getIn } from "formik";

import FormGroupWrapper from "components/FormGroupWrapper";
import {
  academicYearOptions,
  branchOptions,
  destinationStation,
  getGenderOptions,
  semesterOptions,
  getTravelClassOptions,
  getPassDurationOptions,
} from "./utils";

const ConcessionForm: React.FC<
  FormikProps<CFormInitialValues> & FormikHandlers
> = (props) => {
  const { ...formikProps } = props;
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
  } = formikProps;

  const getIsInValidAndErrorMessage = (formField: string) => {
    const isInvalid =
      getIn(touched, formField, false) && getIn(errors, formField, false);
    const errorMessage = isInvalid ? getIn(errors, formField) : null;
    return {
      isInvalid,
      errorMessage,
    };
  };

  return (
    <div className="container my-4">
      <FormGroupWrapper
        type="text"
        label="Full Name"
        controllerProps={{
          placeholder: "Enter full name",
          autoComplete: "off",
          name: "fullName",
          value: values.fullName,
          isInvalid: getIsInValidAndErrorMessage("fullName").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          autoFocus: true,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("fullName").errorMessage}
      />
      <FormGroupWrapper
        type="text"
        label="Roll Number"
        controllerProps={{
          placeholder: "Enter roll number",
          autoComplete: "off",
          name: "rollNumber",
          value: values.rollNumber,
          isInvalid: getIsInValidAndErrorMessage("rollNumber").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("rollNumber").errorMessage}
      />
      <FormGroupWrapper
        type="radio"
        label="Gender"
        controllerProps={{
          radioOptions: getGenderOptions(setFieldValue, values),
          name: "genderOptions",
          inline: true,
          disabled: isSubmitting,
        }}
      />
      <FormGroupWrapper
        type="email"
        label="Email ID"
        controllerProps={{
          placeholder: "Enter email",
          autoComplete: "off",
          name: "emailID",
          value: values.emailID,
          isInvalid: getIsInValidAndErrorMessage("emailID").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("emailID").errorMessage}
      />
      <FormGroupWrapper
        type="text"
        label="Contact Number"
        controllerProps={{
          placeholder: "Enter contact number",
          autoComplete: "off",
          name: "contact",
          value: values.contact,
          isInvalid: getIsInValidAndErrorMessage("contact").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("contact").errorMessage}
      />
      <FormGroupWrapper
        type="date-picker"
        label="DOB"
        controllerProps={{
          placeholderText: "Select DOB",
          dateFormat: "MMM dd, yyyy",
          selected: values.dob,
          isInvalid: getIsInValidAndErrorMessage("dob").isInvalid,
          onChange: (selectedDate: Date) => setFieldValue("dob", selectedDate),
          disabled: isSubmitting,
        }}
        errorMessage={getIsInValidAndErrorMessage("dob").errorMessage}
        controllerClass=""
      />
      <FormGroupWrapper
        type="textarea"
        label="Address"
        controllerProps={{
          placeholder: "Enter address",
          autoComplete: "off",
          name: "address",
          value: values.address,
          isInvalid: getIsInValidAndErrorMessage("address").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("address").errorMessage}
      />
      <FormGroupWrapper
        type="text"
        label="PIN code"
        controllerProps={{
          placeholder: "Enter pin code",
          autoComplete: "off",
          name: "pinCode",
          value: values.pinCode,
          isInvalid: getIsInValidAndErrorMessage("pinCode").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("pinCode").errorMessage}
      />
      <FormGroupWrapper
        type="text"
        label="Source Station"
        controllerProps={{
          placeholder: "Enter source station",
          autoComplete: "off",
          name: "sourceStation",
          value: values.sourceStation,
          isInvalid: getIsInValidAndErrorMessage("sourceStation").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={getIsInValidAndErrorMessage("sourceStation").errorMessage}
      />
      <FormGroupWrapper
        type="select"
        label="Destination Station"
        controllerProps={{
          placeholder: "Select Destination",
          options: destinationStation,
          onChange: (selectedOption: SingleOption) =>
            setFieldValue("destinationStation", selectedOption.value),
          value: destinationStation.find(
            (station) => station.value === values.destinationStation
          ),
          isDisabled: isSubmitting,
        }}
      />
      <FormGroupWrapper
        type="text"
        label="Previous Pass/Season Number"
        controllerProps={{
          placeholder: "Enter NO if new pass",
          autoComplete: "off",
          name: "prevPassNumber",
          value: values.prevPassNumber,
          isInvalid: getIsInValidAndErrorMessage("prevPassNumber").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={
          getIsInValidAndErrorMessage("prevPassNumber").errorMessage
        }
      />
      <FormGroupWrapper
        type="text"
        label="Re-Enter Previous Pass/Season Number"
        controllerProps={{
          placeholder: "Enter NO if new pass",
          autoComplete: "off",
          name: "reEnterPrevPassNumber",
          value: values.reEnterPrevPassNumber,
          isInvalid: getIsInValidAndErrorMessage("reEnterPrevPassNumber")
            .isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={
          getIsInValidAndErrorMessage("reEnterPrevPassNumber").errorMessage
        }
      />
      <FormGroupWrapper
        type="text"
        label="Old Voucher Number"
        controllerProps={{
          placeholder: "Enter voucher number (Bottom Right)",
          autoComplete: "off",
          name: "oldVoucherNumber",
          value: values.oldVoucherNumber,
          isInvalid: getIsInValidAndErrorMessage("oldVoucherNumber").isInvalid,
          onChange: handleChange,
          disabled: isSubmitting,
          onBlur: handleBlur,
        }}
        errorMessage={
          getIsInValidAndErrorMessage("oldVoucherNumber").errorMessage
        }
      />
      <FormGroupWrapper
        type="date-picker"
        label="Old Pass Expiry"
        controllerProps={{
          placeholderText: "Select Expiry Date",
          dateFormat: "MMM dd, yyyy",
          selected: values.oldPassExpiryDate,
          isInvalid: getIsInValidAndErrorMessage("oldPassExpiryDate").isInvalid,
          onChange: (selectedDate: Date) =>
            setFieldValue("oldPassExpiryDate", selectedDate),
          disabled: isSubmitting,
        }}
        errorMessage={
          getIsInValidAndErrorMessage("oldPassExpiryDate").errorMessage
        }
        controllerClass=""
      />
      <FormGroupWrapper
        type="select"
        label="Branch of Academics"
        controllerProps={{
          placeholder: "Select Branch",
          options: branchOptions,
          onChange: (selectedOption: SingleOption) =>
            setFieldValue("branch", selectedOption.value),
          value: branchOptions.find((branch) => branch.value === values.branch),
          isDisabled: isSubmitting,
        }}
      />
      <FormGroupWrapper
        type="select"
        label="Academics Year"
        controllerProps={{
          placeholder: "Select Academic Year",
          options: academicYearOptions,
          onChange: (selectedOption: SingleOption) =>
            setFieldValue("academicYear", selectedOption.value),
          value: academicYearOptions.find(
            (academicYear) => academicYear.value === values.academicYear
          ),
          isDisabled: isSubmitting,
        }}
      />
      <FormGroupWrapper
        type="select"
        label="Semester"
        controllerProps={{
          placeholder: "Select Semester",
          options: semesterOptions,
          onChange: (selectedOption: SingleOption) =>
            setFieldValue("semester", selectedOption.value),
          value: semesterOptions.find(
            (semester) => semester.value === values.semester
          ),
          isDisabled: isSubmitting,
        }}
      />
      <FormGroupWrapper
        type="radio"
        label="Class of Travel"
        controllerProps={{
          radioOptions: getTravelClassOptions(setFieldValue, values),
          name: "travelClassOptions",
          inline: true,
          disabled: isSubmitting,
        }}
      />
      <FormGroupWrapper
        type="radio"
        label="Pass Duration"
        controllerProps={{
          radioOptions: getPassDurationOptions(setFieldValue, values),
          name: "passDurationOptions",
          inline: true,
          disabled: isSubmitting,
        }}
      />
    </div>
  );
};

export default ConcessionForm;
