import React from "react";
import Slider from "react-slick";

import { Indicators } from "../../Components/Indicators/Indicators";
import ArrowTop from "../../assets/svg/ArrowTop";
import { Inputs } from "../../Components/Inputs/Inputs";
import ArrowBottom from "../../assets/svg/ArrowBottom";
import { Button } from "../../Components/Button/Button";
import { ReactComponent as LeftSlider } from "../../assets/img/LeftSlider.svg";
import { ReactComponent as RightSlider } from "../../assets/img/RightSlider.svg";

import "./ExchangeRates.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <RightSlider />,
  prevArrow: <LeftSlider />,
};

type IndicatorsItemType = {
  id: number;
  type: string;
  price: string;
  country: string;
  interest: string;
  height: string;
  arrow: React.ReactNode;
};

const IndicatorsItem: IndicatorsItemType[] = [
  {
    id: 1,
    type: "",
    price: "83,6055",
    country: "USD / RUB",
    interest: "0,13%",
    height: "+0,2380",
    arrow: <ArrowTop />,
  },
  {
    id: 2,
    type: "downgrade",
    price: "83,6055",
    country: "USD / RUB",
    interest: "0,13%",
    height: "+0,2380",
    arrow: <ArrowBottom />,
  },
  {
    id: 3,
    type: "",
    price: "83,6055",
    country: "USD / RUB",
    interest: "0,13%",
    height: "+0,2380",
    arrow: <ArrowTop />,
  },
  {
    id: 4,
    type: "downgrade",
    price: "83,6055",
    country: "USD / RUB",
    interest: "0,13%",
    height: "+0,2380",
    arrow: <ArrowBottom />,
  },
  {
    id: 5,
    type: "",
    price: "83,6055",
    country: "USD / RUB",
    interest: "0,13%",
    height: "+0,2380",
    arrow: <ArrowTop />,
  },
];

export const ExchangeRates = () => (
  <div className="exchangeRates">
    <div className="exchangeRates__header">
      <div className="exchangeRates__title">Курсы валют</div>
      <div>
        <Inputs
          placeholder="Поиск валюты"
          status="active"
          size="m"
          className="m"
        />
      </div>
    </div>
    <div className="exchangeRates__indicators">
      <div>
        <Slider className="exchangeRates__slider" {...settings}>
          {IndicatorsItem.map((el) => (
            <Indicators
              key={el.id}
              type={el.type}
              country={el.country}
              interest={el.interest}
              arrow={el.arrow}
              height={el.height}
              price={el.price}
            />
          ))}
        </Slider>
      </div>
    </div>
    <div className="exchangeRates__info">
      <div className="exchangeRates__points">
        <div className="exchangeRates__country">USD / RUB • CURRENCY</div>
        <div className="exchangeRates__name">US Dollar/Russian Ruble</div>
      </div>
      <div>
        <Button size="a" children="Обменять" variant="active" />
      </div>
    </div>
    <div className="exchangeRates__indicator">
      <div className="exchangeRates__first-indicator">
        <div className="exchangeRates__first-statistics">83,8750</div>
        <div className="exchangeRates__two-statistics">
          <ArrowTop />
          <p>0,45 %</p>
        </div>
        <div className="exchangeRates__third-statistics">+0,3750 Today</div>
      </div>
      <div className="exchangeRates__four-statistics">
        12 Apr., 12:28:25 UTC
      </div>
    </div>
  </div>
);
