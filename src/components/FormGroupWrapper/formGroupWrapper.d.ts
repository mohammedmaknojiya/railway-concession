type FormControllerType =
  | "text"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "date-picker";

type FormGroupWrapperProps = {
  controllerProps: any;
  componentsProps?: any;
  type: FormControllerType;
  label: string;
  controllerClass?: string;
};

type RenderControllerProps = {
  controllerProps: any;
  componentsProps?: any;
  type: FormControllerType;
};
