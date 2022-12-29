import { Routes, Route } from "react-router-dom";

import ConcessionFormWrapper from "components/Form";
import ApplicationStatus from "components/ApplicationStatus";
import CheckStatus from "components/CheckStatus/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ConcessionFormWrapper />} />
      <Route path="status" element={<ApplicationStatus />} />
      <Route path="check-status" element={<CheckStatus />} />
    </Routes>
  );
};

export default AppRoutes;
