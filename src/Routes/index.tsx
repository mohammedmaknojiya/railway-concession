import { Routes, Route } from "react-router-dom";

import ConcessionFormWrapper from "components/Form";
import ApplicationStatus from "components/ApplicationStatus";
import CheckStatus from "components/CheckStatus/index";
import SuccessScreen from "components/SuccessScreen";
import WatchDemo from "./../components/WatchDemo/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ConcessionFormWrapper />} />
      <Route path="status" element={<ApplicationStatus />} />
      <Route path="check-status" element={<CheckStatus />} />
      <Route path="success" element={<SuccessScreen />} />
      <Route path="demo" element={<WatchDemo />} />
    </Routes>
  );
};

export default AppRoutes;
