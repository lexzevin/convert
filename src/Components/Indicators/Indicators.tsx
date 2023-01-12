import React from "react";
import "./Indicators.scss";

type SlidersProps = {
  price: string;
  country: string;
  interest: string;
  height: string;
  arrow: React.ReactNode;
  type: string;
};

export const Indicators: React.FC<SlidersProps> = ({
  price,
  country,
  interest,
  height,
  arrow,
  type,
}) => (
  <div className="slider__index">
    <div
      className={`${type === "downgrade" ? "slider__second" : "slider__first"}`}
    >
      {arrow}
    </div>
    <div className="slider__currency">
      <p className="slider__country-inf">{country}</p>
      <p className="slider__price-inf">{price}</p>
    </div>
    <div>
      <p
        className={`${
          type === "downgrade" ? "slider__second-interest" : "slider__interest"
        }`}
      >
        {interest}
      </p>
      <p
        className={`${
          type === "downgrade" ? "slider__second-height" : "slider__height"
        }`}
      >
        {height}
      </p>
    </div>
  </div>
);
