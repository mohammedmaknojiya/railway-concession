import Header from "components/Header";
import AppRoutes from "./../../Routes/index";

const Layout = () => {
  return (
    <div className="d-flex flex-column h-100vh overflow-hidden">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default Layout;
