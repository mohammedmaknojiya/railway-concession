declare type FormControllerType =
  | "text"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "date-picker";

declare type FormGroupWrapperProps = {
  controllerProps: any;
  componentsProps?: any;
  type: FormControllerType;
  label: string;
  controllerClass?: string;
  errorMessage?: string;
};

declare type RenderControllerProps = {
  controllerProps: any;
  componentsProps?: any;
  type: FormControllerType;
};

declare type SingleOption = {
  label: string;
  value: string;
  onChange?: () => void;
  checked?: boolean;
};
