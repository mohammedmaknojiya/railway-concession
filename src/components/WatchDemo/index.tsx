import { useContext } from "react";

import { AppViewContext } from "context/AppView";

const WatchDemo = () => {
  const { isPhoneView } = useContext(AppViewContext);

  return (
    <div className="container my-5 d-flex justify-content-center flex-column overflow-auto">
      <div className="fw-bold font-size-26 mb-4 text-center">
        How to apply for Railway Concession form
      </div>
      <div className="d-flex justify-content-center">
        <iframe
          width={isPhoneView ? "350" : "700"}
          height={isPhoneView ? "315" : "375"}
          src="https://www.youtube.com/embed/DJu3ksAqbJs"
          title="How to apply for Railway Concession form"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default WatchDemo;
