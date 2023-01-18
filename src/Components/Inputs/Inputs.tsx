import React from "react";
import { FieldProps } from "formik";

import "./Inputs.scss";

type InputsType = {
  status: string;
  className: string;
  placeholder: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: string;
} & Partial<FieldProps>;

export const Inputs: React.FC<InputsType> = ({
  status,
  className,
  size = "s",
  field,
  meta,
  form,
  ...props
}) => {
  return (
    <div>
      <input className={`my-input ${status} ${size}`} {...field} {...props} />
      {form && field && form.touched[field.name] && form.errors[field.name] && (
        <div className="error">{form.errors[field.name]?.toString()}</div>
      )}
    </div>
  );
};
