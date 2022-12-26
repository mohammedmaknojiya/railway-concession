import "bootstrap/dist/css/bootstrap.min.css";
import "assets/styles/_main.scss";

import Header from "components/Header";
import ConcessionForm from "components/Form";
import useMediaQuery from "hooks/useMediaQuery";
import { AppViewContext } from "context/AppView";

const App = () => {
  const isPhoneView = useMediaQuery("(max-width: 770px)");
  const isDesktopView = useMediaQuery("(min-width: 900px)");
  const isTabView = !isPhoneView && !isDesktopView;

  return (
    <AppViewContext.Provider value={{ isPhoneView, isTabView }}>
      <div>
        <Header />
        <ConcessionForm />
      </div>
    </AppViewContext.Provider>
  );
};

export default App;
