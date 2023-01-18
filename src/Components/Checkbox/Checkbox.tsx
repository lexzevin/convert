import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import "./Checkbox.scss";

type CheckBoxProps = {
  title: string;
  onChange?: (e: CheckboxChangeEvent) => void;
};

const CheckboxButton: React.FC<CheckBoxProps> = ({ title, onChange }) => (
  <div>
    <Checkbox className="checkBox" onChange={onChange}>
      {title}
    </Checkbox>
  </div>
);

export default CheckboxButton;
