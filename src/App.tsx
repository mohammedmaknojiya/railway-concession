import "bootstrap/dist/css/bootstrap.min.css";
import "assets/styles/_main.scss";

import useMediaQuery from "hooks/useMediaQuery";
import { AppViewContext } from "context/AppView";
import Layout from "components/Layout";

const App = () => {
  const isPhoneView = useMediaQuery("(max-width: 770px)");
  const isDesktopView = useMediaQuery("(min-width: 900px)");
  const isTabView = !isPhoneView && !isDesktopView;

  return (
    <AppViewContext.Provider value={{ isPhoneView, isTabView }}>
      <Layout />
    </AppViewContext.Provider>
  );
};

export default App;
