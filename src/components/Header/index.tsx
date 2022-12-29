import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3 bg-primary">
      <Link to="/" className="fw-bold fs-4 text-white text-decoration-none">
        Railway Concession
      </Link>
      <Link to="/check-status" className="text-white text-decoration-none">
        Check Status
      </Link>
    </div>
  );
};

export default Header;
