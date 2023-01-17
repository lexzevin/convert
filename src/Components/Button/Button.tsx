import React, { ButtonHTMLAttributes } from "react";

import "./Button.scss";

type ButtonType = {
  variant?: string;
  className?: string;
  children?: string;
  size?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonType> = ({
  variant,
  className,
  children,
  size = "s",
  ...props
}) => (
  <div>
    <button className={`my-button ${variant} ${size}`} {...props}>
      {children}
    </button>
  </div>
);
