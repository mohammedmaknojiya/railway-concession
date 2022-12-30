import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavigationRegular } from "@fluentui/react-icons";
import { Dropdown } from "react-bootstrap";

import { AppViewContext } from "context/AppView";

import "./style.scss";

const Header = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3 bg-primary">
      <div>
        <Link to="/" className="fw-bold fs-4 text-white text-decoration-none">
          Railway Concession
        </Link>
      </div>
      <HeaderMenu />
    </div>
  );
};

export default Header;

const HeaderMenu = () => {
  const { isPhoneView } = useContext(AppViewContext);

  if (isPhoneView) {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle as="div" className="header-menu">
            <NavigationRegular fontSize={28} className="c-pointer text-white" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link
                to="/check-status"
                className="text-dark text-decoration-none me-3"
              >
                Check Status
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/demo" className="text-dark text-decoration-none">
                Watch Demo
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  return (
    <div>
      <Link to="/check-status" className="text-white text-decoration-none me-3">
        Check Status
      </Link>
      <Link to="/demo" className="text-white text-decoration-none">
        Watch Demo
      </Link>
    </div>
  );
};
