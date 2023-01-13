import React from "react";

import "./Inputs.scss";

type InputsType = {
  status: string;
  className: string;
  placeholder: string;
  disabled?: boolean;
  readonly?: boolean;
};

export const Inputs: React.FC<InputsType> = ({
  status,
  className,
  ...props
}) => (
  <div>
    <input className={`my-input ${status}`} {...props} />
  </div>
);
