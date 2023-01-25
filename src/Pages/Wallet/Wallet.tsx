import React from "react";

import { ReactComponent as Wallets } from "../../assets/img/Wallets.svg";

import "./Wallet.scss";
import { Selects } from "../../Components/Select/Select";
import Eur from "../../assets/svg/Eur";
import Rus from "../../assets/svg/Rus";
import Cny from "../../assets/svg/Cny";
import Usd from "../../assets/svg/Usd";
import Turkey from "../../assets/svg/Turkey";
import { Inputs } from "../../Components/Inputs/Inputs";
import { Button } from "../../Components/Button/Button";

const options = [
  {
    id: 1,
    value: "",
    country: <Eur />,
    title: "EUR",
  },
  {
    id: 2,
    value: "",
    country: <Rus />,
    title: "RUS",
  },
  {
    id: 3,
    value: "",
    country: <Cny />,
    title: "CNY",
  },
  {
    id: 4,
    value: "",
    country: <Usd />,
    title: "USD",
  },
  {
    id: 5,
    value: "",
    country: <Turkey />,
    title: "Turkey",
  },
];
export const Wallet = () => (
  <div className="wallet">
    <div className="wallet__title">Кошельки</div>
    <div className="wallet__main">
      <div>
        <Wallets />
      </div>
      <div className="wallet__info">
        На данный момент у вас не созданно ни одного кошелька
      </div>
    </div>
    <div className="wallet__add">Добавление кошелька</div>
    <div>
      <div>
        <Selects title="Выберите валюту" options={options} />
      </div>
      <div className="wallet__input">
        <Inputs
          status="active"
          className=""
          placeholder="# Номер кошелька"
          size="m"
        />
      </div>
      <div>
        <Button size="l" children="Добавить кошелек" variant="disabled" />
      </div>
    </div>
  </div>
);
