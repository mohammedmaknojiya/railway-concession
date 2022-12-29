import ConcessionFormWrapper from "components/Form";
import Header from "components/Header";

const Layout = () => {
  return (
    <div className="d-flex flex-column h-100vh overflow-hidden">
      <Header />
      <ConcessionFormWrapper />
    </div>
  );
};

export default Layout;
