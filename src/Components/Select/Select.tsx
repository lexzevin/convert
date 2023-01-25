import React from "react";
import { Select } from "antd";

import "./Select.scss";

const { Option } = Select;

type SelectsProps = {
  options: SelectOptions[];
  title: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

type SelectOptions = {
  id: number;
  value: string;
  country: React.ReactNode;
  title: string;
};

export const Selects: React.FC<SelectsProps> = ({
  options,
  title,
  onChange,
}) => (
  <Select
    className="select"
    style={{ width: 420 }}
    placeholder={title}
    onChange={onChange}
    optionLabelProp="label"
  >
    {options.map((opt) => (
      <Option value={opt.value} key={opt.value}>
        {opt.country}
        {opt.title}
      </Option>
    ))}
  </Select>
);
