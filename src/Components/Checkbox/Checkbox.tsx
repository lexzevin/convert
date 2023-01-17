import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import "./Checkbox.scss";

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

type CheckBoxProps = {
  title: string;
};

const CheckboxButton: React.FC<CheckBoxProps> = ({ title }) => (
  <div>
    <Checkbox className="checkBox" onChange={onChange}>
      {title}
    </Checkbox>
  </div>
);

export default CheckboxButton;
