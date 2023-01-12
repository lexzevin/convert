import React from "react";
import { AutoComplete, Input } from "antd";
import Glass from "../../assets/svg/Glass";
import "./AutoComplete.scss";
import ArrowTop from "../../assets/svg/ArrowTop";
import ArrowBottom from "../../assets/svg/ArrowBottom";

export const AutoCompletes: React.FC = () => {
  const renderItem = (
    title: string,
    subtitle: string,
    price: string,
    height: React.ReactNode,
    percent: string,
    type?: string
  ) => ({
    value: title,
    label: (
      <div className="autoComplete__items">
        <div className="autoComplete__name">
          <p className="autoComplete__title">{title}</p>
          <p className="autoComplete__subtitle">{subtitle}</p>
        </div>
        <div className="autoComplete__indicators">
          <div>
            <p
              className={`${
                type === "downgrade"
                  ? "autoComplete__price-second"
                  : "autoComplete__price"
              }`}
            >
              {price}
            </p>
          </div>
          <div
            className={`${
              type === "downgrade"
                ? "autoComplete__numbers-second"
                : "autoComplete__numbers"
            }`}
          >
            <p className="autoComplete__height">{height}</p>
            <p
              className={`${
                type === "downgrade"
                  ? "autoComplete__percent-second"
                  : "autoComplete__percent"
              }`}
            >
              {percent}
            </p>
          </div>
        </div>
      </div>
    ),
  });

  const options = [
    {
      options: [
        renderItem(
          "Dollar Industries Ltd",
          "DOLLAR : NSE (IN)",
          "598,10 ₹",
          <ArrowBottom />,
          "1,15 %",
          "downgrade"
        ),
        renderItem(
          "Dollar Tree",
          "DLTR : NASDAQ (US)",
          "167, 18 $",
          <ArrowTop />,
          "1,02 %"
        ),
        renderItem(
          "Dollar General",
          "DG : NYSE (US)",
          "243,83 $",
          <ArrowTop />,
          "1,27 %"
        ),
        renderItem("Aviva", "GU8 : ETR (DE)", "5,25 €", <ArrowTop />, "0,96 %"),
      ],
    },
  ];

  return (
    <>
      <AutoComplete
        className="autoComplete"
        options={options}
        style={{ width: 420 }}
      >
        <Input
          size="large"
          prefix={<Glass />}
          placeholder="Search for currency"
        />
      </AutoComplete>
    </>
  );
};
