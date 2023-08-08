import { object, string } from "yup";

export const getUserDetailsSchema = () =>
  object({
    fullName: string().required(`Full Name field is required`),
    gender: string().required("Gender is required"),
    emailID: string()
      .email("Invalid Email address")
      .required(`Email is required`),
    contact: string().required("Contact number is required"),
    dob: string().required("DOB is required"),
    address: string().required("Address is required"),
    pinCode: string().required("Pin code is required"),
    sourceStation: string().required("Source station is required"),
    destinationStation: string().required("Destination station is required"),
    prevPassNumber: string().required("Previous pass number is required"),
    reEnterPrevPassNumber: string().required("Re-enter previous pass number"),
    oldVoucherNumber: string().required("Old voucher number is required"),
    oldPassExpiryDate: string().required("Old pass expiry date is required"),
    branch: string().required("Branch name is required"),
    academicYear: string().required("Academic year is required"),
    semester: string().required("Semester number is required"),
    passDuration: string().required("Pass duration is required"),
    travelClass: string().required("Travel class is required"),
  });
