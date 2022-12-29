export const destinationStation = [
  {
    label: "Byculla Station",
    value: "Byculla Station",
    isDefault: true,
  },
  {
    label: "Sandhrust Road Station",
    value: "Sandhrust Road Station",
  },
  {
    label: "Dockyard Station",
    value: "Dockyard Station",
  },
  { label: "Mumbai Central", value: "Mumbai Central" },
];

export const branchOptions = [
  {
    label: "Information Technology",
    value: "Information Technology",
  },
  {
    label: "Computer Science",
    value: "Computer Science",
  },
  {
    label: "Electronics",
    value: "Electronics",
  },
  {
    label: "Automobile",
    value: "Automobile",
  },
  {
    label: "Civil",
    value: "Civil",
  },
  {
    label: "Mechanical",
    value: "Mechanical",
  },
  {
    label: "EXTC",
    value: "EXTC",
  },
];

export const academicYearOptions = [
  {
    label: "First Year",
    value: "1",
  },
  {
    label: "Second Year",
    value: "2",
  },
  {
    label: "Third Year",
    value: "3",
  },
  {
    label: "Fourth Year",
    value: "4",
  },
];

export const semesterOptions = [1, 2, 3, 4, 5, 6, 7, 8].map((year) => ({
  label: year.toString(),
  value: year.toString(),
}));

export const getGenderOptions = (
  setFieldValue: any,
  values: CFormInitialValues
) => [
  {
    label: "Male",
    value: "Male",
    onChange: () => {
      setFieldValue("gender", "Male");
    },
    checked: values.gender === "Male",
  },
  {
    label: "Female",
    value: "Female",
    onChange: () => {
      setFieldValue("gender", "Female");
    },
    checked: values.gender === "Female",
  },
];

export const getTravelClassOptions = (
  setFieldValue: any,
  values: CFormInitialValues
) => [
  {
    label: "First Class",
    value: "First Class",
    onChange: () => {
      setFieldValue("travelClass", "First Class");
    },
    checked: values.travelClass === "First Class",
  },
  {
    label: "Second Class",
    value: "Second Class",
    onChange: () => {
      setFieldValue("travelClass", "Second Class");
    },
    checked: values.travelClass === "Second Class",
  },
];

export const getPassDurationOptions = (
  setFieldValue: any,
  values: CFormInitialValues
) => [
  {
    label: "Monthly",
    value: "Monthly",
    checked: values.passDuration === "Monthly",
    onChange: () => {
      setFieldValue("passDuration", "Monthly");
    },
  },
  {
    label: "Quarterly",
    value: "Quarterly",
    checked: values.passDuration === "Quarterly",
    onChange: () => {
      setFieldValue("passDuration", "Quarterly");
    },
  },
];
