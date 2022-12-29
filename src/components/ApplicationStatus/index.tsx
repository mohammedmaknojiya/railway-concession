import SingleField from "./SingleField";

const ApplicationStatus = () => {
  return (
    <div className="container my-4 overflow-auto">
      <div className="text-center font-size-26 fw-bold mb-3">
        Application Status
      </div>
      <div className="border rounded-8 p-3 light-shadow">
        <SingleField label="ID" value="1234" />
        <SingleField label="Name" value="Mohammed Maknojiya" />
        <SingleField label="Source Station" value="Jogeshwari" />
        <SingleField label="Destination Station" value="Mumbai Central" />
        <SingleField label="Travel Class" value="First Class" />
        <SingleField label="Duration" value="Quarterly" />
        <SingleField label="Applied Date" value="28 January" />
        <SingleField label="Status" value="Not Issued" />
        <SingleField label="ID Card" value="Render Image here" />
        <SingleField label="Remarks" value="No Remarks" borderBottom={false} />
      </div>
    </div>
  );
};
export default ApplicationStatus;
