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
  const { values, touched, errors, isSubmitting, handleChange, setFieldValue } =
    formikProps;

  return (
    <div className="container my-5">
      <FormGroupWrapper
        type="text"
        label="Full Name"
        controllerProps={{
          placeholder: "Enter full name",
          autoComplete: "off",
          name: "fullName",
          value: values.fullName,
          isInvalid: touched.fullName && errors.fullName,
          onChange: handleChange,
          disabled: isSubmitting,
          autoFocus: true,
        }}
        errorMessage={getIn(errors, "fullName")}
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
          isInvalid: touched.emailID && errors.emailID,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "emailID")}
      />
      <FormGroupWrapper
        type="text"
        label="Contact Number"
        controllerProps={{
          placeholder: "Enter contact number",
          autoComplete: "off",
          name: "contact",
          value: values.contact,
          isInvalid: touched.contact && errors.contact,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "contact")}
      />
      <FormGroupWrapper
        type="date-picker"
        label="DOB"
        controllerProps={{
          placeholderText: "Select DOB",
          dateFormat: "MMM dd, yyyy",
          selected: values.dob,
          isInvalid: touched.dob && errors.dob,
          onChange: (selectedDate: Date) => setFieldValue("dob", selectedDate),
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "dob")}
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
          isInvalid: touched.address && errors.address,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "address")}
      />
      <FormGroupWrapper
        type="text"
        label="PIN code"
        controllerProps={{
          placeholder: "Enter pin code",
          autoComplete: "off",
          name: "pinCode",
          value: values.pinCode,
          isInvalid: touched.pinCode && errors.pinCode,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "pinCode")}
      />
      <FormGroupWrapper
        type="text"
        label="Source Station"
        controllerProps={{
          placeholder: "Enter source station",
          autoComplete: "off",
          name: "sourceStation",
          value: values.sourceStation,
          isInvalid: touched.sourceStation && errors.sourceStation,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
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
          isInvalid: touched.prevPassNumber && errors.prevPassNumber,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "prevPassNumber")}
      />
      <FormGroupWrapper
        type="text"
        label="Re-Enter Previous Pass/Season Number"
        controllerProps={{
          placeholder: "Enter NO if new pass",
          autoComplete: "off",
          name: "reEnterPrevPassNumber",
          value: values.reEnterPrevPassNumber,
          isInvalid:
            touched.reEnterPrevPassNumber && errors.reEnterPrevPassNumber,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "reEnterPrevPassNumber")}
      />
      <FormGroupWrapper
        type="text"
        label="Old Voucher Number"
        controllerProps={{
          placeholder: "Enter voucher number (Bottom Right)",
          autoComplete: "off",
          name: "oldVoucherNumber",
          value: values.oldVoucherNumber,
          isInvalid: touched.oldVoucherNumber && errors.oldVoucherNumber,
          onChange: handleChange,
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "oldVoucherNumber")}
      />
      <FormGroupWrapper
        type="date-picker"
        label="Old Pass Expiry"
        controllerProps={{
          placeholderText: "Select Expiry Date",
          dateFormat: "MMM dd, yyyy",
          selected: values.oldPassExpiryDate,
          isInvalid: touched.oldPassExpiryDate && errors.oldPassExpiryDate,
          onChange: (selectedDate: Date) =>
            setFieldValue("oldPassExpiryDate", selectedDate),
          disabled: isSubmitting,
        }}
        errorMessage={getIn(errors, "oldPassExpiryDate")}
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
