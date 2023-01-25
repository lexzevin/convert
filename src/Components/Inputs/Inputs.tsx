import React from "react";
import { FieldProps } from "formik";
import InputMask from "react-input-mask";

import "./Inputs.scss";

type InputsType = {
  status: string;
  className: string;
  placeholder: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: string;
  isMask?: boolean;
} & Partial<FieldProps>;

export const Inputs: React.FC<InputsType> = ({
  status,
  className,
  size = "s",
  field,
  meta,
  form,
  isMask = false,
  ...props
}) => {
  return (
    <>
      {isMask ? (
        <div>
          <InputMask
            {...props}
            className={`my-input ${status} ${size}`}
            {...field}
            mask="+7 999 999 99 99"
            maskChar=""
          />
          {form &&
            field &&
            form.touched[field.name] &&
            form.errors[field.name] && (
              <div className="error">{form.errors[field.name]?.toString()}</div>
            )}
        </div>
      ) : (
        <div>
          <input
            className={`my-input ${status} ${size}`}
            {...field}
            {...props}
          />
          {form &&
            field &&
            form.touched[field.name] &&
            form.errors[field.name] && (
              <div className="error">{form.errors[field.name]?.toString()}</div>
            )}
        </div>
      )}
    </>
  );
};
