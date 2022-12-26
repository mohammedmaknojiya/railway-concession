import { useContext } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AppViewContext } from "context/AppView";

const FormGroupWrapper: React.FC<FormGroupWrapperProps> = ({
  type,
  controllerProps,
  componentsProps,
  label,
  controllerClass = "flex-grow-1",
}) => {
  const { isPhoneView } = useContext(AppViewContext);

  return (
    <div
      className={`d-flex ${
        isPhoneView ? "flex-column" : "align-items-center"
      } my-3`}
    >
      <div className={`font-size-16 ${isPhoneView ? "w-100" : "w-30 me-3"}`}>
        {label}
      </div>
      <div className={`${controllerClass}`}>
        <RenderController
          type={type}
          controllerProps={controllerProps}
          componentsProps={componentsProps}
        />
      </div>
    </div>
  );
};

export default FormGroupWrapper;

const RenderController: React.FC<RenderControllerProps> = ({
  type,
  controllerProps,
  componentsProps,
}) => {
  switch (type) {
    case "text":
      return <Form.Control type="text" {...controllerProps} />;

    case "email":
      return <Form.Control type="email" {...controllerProps} />;

    case "number":
      return <Form.Control type="number" {...controllerProps} />;

    case "textarea":
      return <Form.Control as="textarea" {...controllerProps} />;

    case "select":
      return (
        <Select
          {...controllerProps}
          components={{ IndicatorSeparator: null, ...componentsProps }}
          classNamePrefix="react-select"
        />
      );

    case "radio":
      return controllerProps.radioOptions.map(
        (option: { label: string; value: string }) => {
          return (
            <Form.Check
              inline={controllerProps.inline}
              name={controllerProps.name}
              key={option.value}
              type="radio"
              label={option.label}
              value={option.value}
            />
          );
        }
      );

    case "date-picker":
      return (
        <DatePicker
          onChange={() => console.log("change")}
          className="form-control"
          showTimeInput={false}
          adjustDateOnChange={false}
          {...controllerProps}
        />
      );
  }
};
