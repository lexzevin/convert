import React from "react";
import Logo from "../../assets/img/Logo.png";
import ExchangeRates from "../../assets/img/ExchangeRates.png";
import User from "../../assets/img/User.png";
import TwoArrow from "../../assets/img/TwoArrow.png";
import Wallet from "../../assets/img/Wallet.png";
import Transactions from "../../assets/img/Transactions.png";
import Out from "../../assets/img/Out.png";

import "./LeftDashboard.scss";

export const LeftDashboard = () => (
  <div className="left__board">
    <div className="left__board__logo">
      <img src={Logo} alt="logo" />
    </div>
    <div className="left__board__all-item">
      <div className="left__board__item">
        <img src={ExchangeRates} alt="ExchangeRates" />
        <p className="left__board__text">Курсы валют</p>
      </div>
      <div className="left__board__item">
        <img src={User} alt="User" />
        <p className="left__board__text">Мой профиль</p>
      </div>
      <div className="left__board__item">
        <img src={TwoArrow} alt="TwoArrow" />
        <p className="left__board__text">Обмен валют</p>
      </div>
      <div className="left__board__item">
        <img src={Wallet} alt="Wallet" />
        <p className="left__board__text">Кошельки</p>
      </div>
      <div className="left__board__item">
        <img src={Transactions} alt="Transactions" />
        <p className="left__board__text">Транзакции</p>
      </div>
    </div>
    <div className="left__board__border"></div>
    <div className="left__board__last-item">
      <img src={Out} alt="Out" />
      <p className="left__board__text">Выход</p>
    </div>
  </div>
);
