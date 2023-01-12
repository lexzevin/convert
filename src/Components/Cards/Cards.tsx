import React from "react";
import "./Cards.scss";

type CardsProps = {
  price: string;
  country: string;
  flag: React.ReactNode;
};

export const Cards: React.FC<CardsProps> = ({ price, country, flag }) => (
  <div>
    <div className="slider__block">
      <div className="slider__card">
        <div className="slider__header">
          <span className="slider__country">{country}</span>
          {flag}
        </div>
        <div className="slider__price">{price}</div>
      </div>
    </div>
  </div>
);
