import FormGroupWrapper from "components/FormGroupWrapper";
import {
  academicYearOptions,
  branchOptions,
  destinationStation,
  genderOptions,
  passDurationOptions,
  semesterOptions,
  travelClassOptions,
} from "./utils";

const ConcessionForm = () => {
  return (
    <div className="container my-5">
      <FormGroupWrapper
        type="text"
        label="Full Name"
        controllerProps={{
          placeholder: "Enter full name",
          autoComplete: "off",
          name: "fullName",
        }}
      />
      <FormGroupWrapper
        type="radio"
        label="Gender"
        controllerProps={{
          radioOptions: genderOptions,
          name: "genderOptions",
          inline: true,
        }}
      />
      <FormGroupWrapper
        type="email"
        label="Email ID"
        controllerProps={{
          placeholder: "Enter email",
          autoComplete: "off",
          name: "emailID",
        }}
      />
      <FormGroupWrapper
        type="text"
        label="Contact Number"
        controllerProps={{
          placeholder: "Enter contact number",
          autoComplete: "off",
          name: "contact",
        }}
      />
      <FormGroupWrapper
        type="textarea"
        label="Address"
        controllerProps={{
          placeholder: "Enter address",
          autoComplete: "off",
          name: "address",
        }}
      />
      <FormGroupWrapper
        type="text"
        label="PIN code"
        controllerProps={{
          placeholder: "Enter pin code",
          autoComplete: "off",
          name: "pinCode",
        }}
      />
      <FormGroupWrapper
        type="text"
        label="Source Station"
        controllerProps={{
          placeholder: "Enter source station",
          autoComplete: "off",
          name: "sourceStation",
        }}
      />
      <FormGroupWrapper
        type="select"
        label="Destination Station"
        controllerProps={{
          placeholder: "Select Destination",
          options: destinationStation,
        }}
      />
      <FormGroupWrapper
        type="text"
        label="Previous Pass/Season Number"
        controllerProps={{
          placeholder: "Enter NO if new pass",
          autoComplete: "off",
          name: "prevPassNumber",
        }}
      />
      <FormGroupWrapper
        type="text"
        label="Re-Enter Previous Pass/Season Number"
        controllerProps={{
          placeholder: "Enter NO if new pass",
          autoComplete: "off",
          name: "prevPassNumber",
        }}
      />
      <FormGroupWrapper
        type="text"
        label="Old Voucher Number"
        controllerProps={{
          placeholder: "Enter voucher number (Bottom Right)",
          autoComplete: "off",
          name: "prevPassNumber",
        }}
      />
      <FormGroupWrapper
        type="select"
        label="Branch of Academics"
        controllerProps={{
          placeholder: "Select Branch",
          options: branchOptions,
        }}
      />
      <FormGroupWrapper
        type="select"
        label="Academics Year"
        controllerProps={{
          placeholder: "Select Academic Year",
          options: academicYearOptions,
        }}
      />
      <FormGroupWrapper
        type="select"
        label="Semester"
        controllerProps={{
          placeholder: "Select Semester",
          options: semesterOptions,
        }}
      />
      <FormGroupWrapper
        type="radio"
        label="Class of Travel"
        controllerProps={{
          radioOptions: travelClassOptions,
          name: "travelClassOptions",
          inline: true,
        }}
      />
      <FormGroupWrapper
        type="radio"
        label="Pass Duration"
        controllerProps={{
          radioOptions: passDurationOptions,
          name: "passDurationOptions",
          inline: true,
        }}
      />
      <FormGroupWrapper
        type="date-picker"
        label="DOB"
        controllerProps={{
          placeholderText: "Select DOB",
          dateFormat: "MMM dd, yyyy",
        }}
        controllerClass=""
      />
      <FormGroupWrapper
        type="date-picker"
        label="Old Pass Expiry"
        controllerProps={{
          placeholderText: "Select Date",
          dateFormat: "MMM dd, yyyy",
        }}
        controllerClass=""
      />
    </div>
  );
};

export default ConcessionForm;
