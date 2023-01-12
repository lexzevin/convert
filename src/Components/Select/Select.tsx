import React from "react";
import { Select } from "antd";
import "./Select.scss";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const { Option } = Select;

type SelectsProps = {
  options: SelectOptions[];
  title: string;
};

type SelectOptions = {
  id: number;
  value: string;
  country: React.ReactNode;
  title: string;
};

export const Selects: React.FC<SelectsProps> = ({ options, title }) => (
  <Select
    style={{ width: 332 }}
    defaultValue={title}
    onChange={handleChange}
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
